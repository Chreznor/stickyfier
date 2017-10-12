const stickyfier = (HeadlineContainers, listContainers) => {

    let arr = [];

    const fixedHeadline = () => {
        for (var i = 0; i < HeadlineContainers.length; i++) {
            const headlineContainer = HeadlineContainers[i];
            const headlineContainerTop = headlineContainer.getBoundingClientRect().top + window.scrollY;
            const listEntry = listContainers[i];

            //console.log(headlineContainerTop, headlineContainer.getBoundingClientRect().height, listEntry.getBoundingClientRect().top + window.scrollY, arr)

            if (arr.includes(Math.floor(headlineContainerTop)) === false) {
                if (arr.length < HeadlineContainers.length) {
                    arr.push(Math.floor(headlineContainerTop));
                }
            }

            // if ((arr[1] - arr[0]) - listEntry.getBoundingClientRect().height > 50) {
            //   arr = [];
            // }

            if (window.scrollY >= (listEntry.getBoundingClientRect().top + window.scrollY)) {
                listEntry.style.paddingTop = headlineContainer.getBoundingClientRect().height + 'px';
                headlineContainer.classList.add('fixed-nav');
            } else {
                listEntry.style.paddingTop = 0;
                headlineContainer.classList.remove('fixed-nav');
            }

            if (window.scrollY >= headlineContainerTop + headlineContainer.getBoundingClientRect().height) {
                headlineContainer.classList.add("bottom");
            } else {
                headlineContainer.classList.remove("bottom");
            }
        }
    }

    return {
        initialize() {
            window.addEventListener('scroll', fixedHeadline);
        },
        disable() {
            window.removeEventListener('scroll', fixedHeadline);
            HeadlineContainers.forEach(element => {
                element.classList.remove('fixed-nav');
                element.classList.remove('bottom');
            });
            listContainers.forEach(listEntry => {
                listEntry.style.paddingTop = 0;
            })
        }
    }

}

module.exports = stickyfier;
