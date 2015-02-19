import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON('http://localhost:3000', function(data) {
      return data;
    });
  },

  actions: {
    reloadModels: function(file, res) {
      Ember.Logger.info('reloadModels', file, res);
      this.refresh();
    }
  }
});
