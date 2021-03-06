define(["app/app"], function(App) {
  "use strict";

  App.CreatePostView = Ember.TextArea.extend(Ember.TargetActionSupport, {
    classNames: ['edit-post-area'],
    valueBinding: 'parentView.controller.body',
    action: 'create',

    click: function() {
      var view = this.get('parentView.sendTo')
      if (view)
        view.set('isVisible', true)
    }
  })
})
