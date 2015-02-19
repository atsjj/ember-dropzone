import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['dropzone'],

  insertDropzone: function() {
    this.$().dropzone({
      url: this.get('url'),
      addRemoveLinks: true,
      previewContainer: true,
      success: (file, res) => {
        this.sendAction('reload', file, res);
      }
    });
  }.on('didInsertElement')
});
