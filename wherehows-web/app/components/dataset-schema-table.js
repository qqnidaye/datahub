import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onFormatChange() {
      this.sendAction('onFormatChange', ...arguments);
    },

    onPrivacyChange() {
      this.sendAction('onPrivacyChange', ...arguments);
    },

    onSubjectChange() {
      this.sendAction('onSubjectChange', ...arguments);
    }
  }
});