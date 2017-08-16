
import '../common/base';

import tplBody from '../../_templates/home/index.hbs';

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
