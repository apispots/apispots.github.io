import '../common/base';

import '../../assets/css/docs.css';

{

  /**
   * Initializes the view.
   * @return {[type]} [description]
   */
  const onReady = function() {

    $('.ui.accordion').accordion();
  };


  // attach ready event
  $(document)
    .ready(onReady);


}
