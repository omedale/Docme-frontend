module.exports = {
  'Does not show the task list if there are no tasks'(client) {
    client
      .url('http://localhost:8080/login')
      .waitForElementVisible('.container h2')
      .expect.element('.main').to.not.be.present;
    client.end();
  },
  'Does not show the footer if there are no tasks'(client) {
    client
      .url('http://localhost:8080/login')
      .waitForElementVisible('.registerheader h1')
      .expect.element('.footer').to.not.be.present;
    client.end();
  },
}