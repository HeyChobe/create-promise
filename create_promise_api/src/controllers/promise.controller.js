const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Promise = require("../models/promise.model");

module.exports.addPromise = async (req, res, next) => {
  try {
    const { detail, time, email, ong, amount } = req.body;
    if (detail == "" || time == "" || email == "" || ong == "" || amount == "")
      res.status(400).send({ error: "Empty inputs!" });
    else {
      let dateN = new Date();
      let day = dateN.getDate();
      let month = dateN.getMonth();
      let year = dateN.getFullYear();

      if (month < 10) {
        newMonth = `0${month}`;
      }

      let newPromise = new Promise({
        detail,
        time,
        email,
        ong,
        amount,
        date: `${year}/${newMonth}/${day}`,
      });

      //SendGrid requirements
      const msg = {
        to: email,
        from: "noreplyprcc@gmail.com",
        subject: "THANKS FOR YOUR DONATION",
        text: `You just created a fitness promise! Now up to you.
        \n\nYour promise:
        \n${detail}
        \n\nYour guarantee: $${amount}
        \n\nONG to which your money will be donated in case of not keeping your promise: ${ong}
        \n\nRemember that it depends on you, you must be honest with yourself!
        \n\nHelp yourself, help others.`,
      };

      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });

      newPromise.save((error) => {
        if (error) {
          console.log(error);
          res.status(500).send({ error: "Fail to save promise in database" });
        } else {
          res.send(newPromise);
        }
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.getPromises = async (req, res, next) => {
  const promises = await Promise.find({});

  if (promises) {
    res.status(200).send(promises);
  } else {
    res.status(400).send({ error: "Error getting promises" });
  }
};

module.exports.deletePromise = async (req, res, next) => {
  try {
    const promise = await Promise.find({ _id: req.params.id });
    if (promise) {
      await Promise.findOneAndDelete(
        { _id: req.params.id },
        function (error, promise) {
          if (error) {
            res.status(404).send("News not found");
          } else {
            res.status(200).send({ Delete: promise });
          }
        }
      );
    } else {
      res.status(404).send("Promise not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Fail to delete news in database" });
  }
};
