//It would take a lot of time to create 100 blocks. Therefore, I've made a small function to generate them.
function generateEntries() {
    const list = document.querySelector('.list');
    for (let i = 0; i < 100; i++) {
        const classes = ['red', 'wheat', 'crimson', 'green', 'coral', 'red', 'wheat', 'crimson', 'green', 'coral'];
        list.innerHTML +=
            ` <li class="list-container">
        <div class="headline-container ${classes[Math.floor(Math.random() * classes.length)]}">
          <h1>Headline #${i+1}</h1>
        </div>
        <div class="text-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nostrum harum assumenda voluptate sed! Ullam repellat eum qui necessitatibus odit illo, harum praesentium omnis reiciendis neque. Vel iure dicta, modi in, quidem aliquid exercitationem autem minima repudiandae hic est numquam totam nesciunt, ipsa ipsum. Velit hic, dolore numquam tempore voluptatum nesciunt! Minima soluta laborum doloremque? Ipsam, at excepturi nam necessitatibus, amet saepe. Velit eos, dolorum debitis? Doloribus vero, dolorum quia nesciunt soluta, sint unde tempora neque provident dolorem explicabo molestiae expedita delectus corporis, aut magni laboriosam cumque. Molestiae aperiam, dolore fugiat dolores amet! Itaque recusandae, repellendus magnam ullam aut accusantium?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque tenetur dicta, optio cumque adipisci fugit iure? Expedita sit eligendi, recusandae, quia repellat neque quis. Molestiae ab, beatae, laboriosam inventore dolorem esse deserunt, voluptatibus optio consequuntur aliquid distinctio? Aspernatur nemo atque, amet vel similique, voluptatum! Fugiat dolorem quam necessitatibus, ab excepturi ut praesentium quos aliquam soluta quibusdam error fuga voluptas et beatae quae architecto assumenda facere unde voluptates. Maxime, perspiciatis nostrum.</p>
        </div>
      </li>
      `;
    }
};
generateEntries();

const initializeBtn = document.querySelector('#initialize');
const disableBtn = document.querySelector('#disable');

const headlineContainers = document.querySelectorAll('.headline-container');
const listContainers = document.querySelectorAll('.list-container');


const stickyfier = require('./stickyfier.js');
const methods = stickyfier(headlineContainers, listContainers);
initializeBtn.addEventListener('click', methods.initialize);
disableBtn.addEventListener('click', methods.disable);
