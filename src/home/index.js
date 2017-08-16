
import '../common/base';

{

  /**
   * Initializes the view.
   * @return {[type]} [description]
   */
  const onReady = function() {

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse() {
          $('.fixed.menu').transition('fade out');
        }
      });

  };


  // attach ready event
  $(document)
    .ready(onReady);


}
