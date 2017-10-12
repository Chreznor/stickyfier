const assert = require('chai').assert;

function testFunction(HeadlineContainers, listContainers) {

    let arr = [];

    const fixedHeadline = () => {
        for (var i = 0; i < HeadlineContainers.length; i++) {
            const headlineContainer = HeadlineContainers[i];
            const headlineContainerTop = headlineContainer.getBoundingClientRect().top + window.scrollY;
            const listEntry = listContainers[i];
            const topOfHeadlineContainer = headlineContainerTop;

            if (arr.includes(Math.floor(headlineContainerTop)) === false) {
                if (arr.length < HeadlineContainers.length) {
                    arr.push(Math.floor(headlineContainerTop));
                }
            }

            if (window.scrollY >= arr[i]) {
                listEntry.style.paddingTop = headlineContainer.getBoundingClientRect().height + 'px';
                headlineContainer.classList.add('fixed-nav');
            } else {
                listEntry.style.paddingTop = 0;
                headlineContainer.classList.remove('fixed-nav');
            }

            if (window.scrollY >= topOfHeadlineContainer + headlineContainer.getBoundingClientRect().height) {
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

console.log(app);
