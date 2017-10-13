const stickyfier = (headlineContainers, listContainers) => {
  //The headline container's parent element is also needed to correctly identify the distances between the texts

  //the private function that stickyfies the headlines
  const fixedHeadline = () => {

      //a for loop is used to keep track of every element in the DOM collection
      for (var i = 0; i < headlineContainers.length; i++) {
          const headlineContainer = headlineContainers[i];
          const headlineContainerTop = headlineContainer.getBoundingClientRect().top + window.scrollY;
          const listEntry = listContainers[i];

          if (window.scrollY >= (listEntry.getBoundingClientRect().top + window.scrollY)) {
              //it's really important to add headline container's height to the padding of its parent element
              //in order to avoid the jumping of the text content once the fixed element leaves the regular DOM flow
              listEntry.style.paddingTop = headlineContainer.getBoundingClientRect().height + 'px';
              headlineContainer.classList.add('fixed-nav');
          } else {
              listEntry.style.paddingTop = 0;
              headlineContainer.classList.remove('fixed-nav');
          }
      }
  }

  let handler;
  //handles the case when initialize is pressed more than once, after which the event listener cannot be removed with disable
  let preventFire = false;

  //a quickly done scroll optimization
  function throttle(func, wait) {
    let time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        func();
        time = Date.now();
      }
    }
  }

  //returning two functions that add or remove the event listener to the window scroll
  return {
      initialize() {
          if (preventFire === false) {
            handler = throttle(fixedHeadline, 100);
            window.addEventListener('scroll', handler);
          }
          preventFire = true;
      },
      disable() {
          window.removeEventListener('scroll', handler);
          preventFire = false;
          //once the event lisntener is removed, the attached classes have to go too
          headlineContainers.forEach(element => {
            element.classList.remove('fixed-nav');
          });
          //restoring the listContainers' padding
          listContainers.forEach(listEntry => {
              listEntry.style.paddingTop = 0;
          });
      }
  }

}

module.exports = stickyfier;
