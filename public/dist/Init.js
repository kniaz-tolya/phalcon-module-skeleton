ADM.app = new ADM.App;

ADM.app.events.on('router:init:end', function() {
  return Backbone.history.start({
    pushState: true
  });
});

ADM.app.init();

$(document).on('click', 'a[data-backbone]', function(e) {
  e.preventDefault();
  console.log('a[data-backbone] click');
  return ADM.app.router.navigate($(e.currentTarget).attr('href'));
});

$(function() {
  return ADM.app.events.t('dom:onload');
});
