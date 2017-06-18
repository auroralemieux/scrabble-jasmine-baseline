import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// This function wraps the underscore template for this
// view, ensuring it is only compiled once for the whole
// program. How does it work? Spend some time reading
// and see if you can figure it out.
var wordTemplate = function(data) {
  // If the template hasn't been compiled yet, do so now
  if (!this.template) {
    this.template = _.template($('#word-template').html());
  }

  // Invoke the template on the provided data
  return this.template(data);
}.bind({});

var WordView = Backbone.View.extend({
  tagName: 'tr',

  initialize: function() {
    // We don't expect individual words to ever
    // change, so we can call render immediately
    this.render();
  },

  render: function() {
    var generatedHtml = wordTemplate({
      text: this.model.get('text'),
      score: this.model.score()
    });
    this.$el.html(generatedHtml);
  }
});

export default WordView;
