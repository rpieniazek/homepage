var technologies = ['Spring', 'JavaScript', 'Angular', 'Hibernate','Jooq','AWS','Docker','MySQL','Redis','Dynamodb','Jenkins', 'Java'];
(function blink(techId) {
  var technologiesEl = $('#technologies');
  var switchNextTechnology = function() {
    technologiesEl.text(technologies[techId])
  };
  var invokeNextBlink = function() {
    blink((techId + 1) % technologies.length);
  };

  technologiesEl
    .fadeOut(1000, switchNextTechnology)
    .fadeIn(1000, invokeNextBlink);
})(0);
