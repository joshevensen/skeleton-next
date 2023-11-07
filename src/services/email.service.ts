const postmark = require("postmark");

const client = new postmark.ServerClient(process.env.POSTMARK_KEY);

function send(
  name: string,
  email: string,
  subject: string,
  html: string,
  text: string
) {
  client.sendEmail({
    From: `${name} <${email}>`,
    To: "jason@sitesbyjason.com",
    Subject: subject,
    HtmlBody: html,
    TextBody: text,
    MessageStream: "outbound",
  });
}

export default {
  send,
};
