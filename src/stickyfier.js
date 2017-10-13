const stickyfier = (HeadlineContainers, listContainers) => {
  //The headline container's parent element is also needed to correctly identify the distances between the texts

  //the private function that stickyfies the headlines
  const fixedHeadline = () => {

      //a for loop is used to keep track of every element in the DOM collection
      for (var i = 0; i < HeadlineContainers.length; i++) {
          const headlineContainer = HeadlineContainers[i];
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

  //returning two functions that add or remove the event listener to the window scroll
  return {
      initialize() {
          window.addEventListener('scroll', fixedHeadline);
      },
      disable() {
          window.removeEventListener('scroll', fixedHeadline);
          //once the event lisntener is removed, the attached classes have to go too
          HeadlineContainers.forEach(element => {
              element.classList.remove('fixed-nav');
              element.classList.remove('bottom');
          });
          //restoring the listContainers' padding
          listContainers.forEach(listEntry => {
              listEntry.style.paddingTop = 0;
          })
      }
  }

}

module.exports = stickyfier;
