

const entityData = {
  name: 'Tienda Deportiva',
  title: 'Tienda Deportiva Especializada',
  location: 'Bogota, Colombia',
  bio: 'Tienda deportiva dedicada a la venta de ropa, calzado y accesorios para diferentes disciplinas deportivas.',
  avatar: 'https://via.placeholder.com/150',

  contact: {
    email: 'danielmogo0508gmai.com',
    phone: '+57 3203090283'
  },

  
  items: [
    { name: 'Camiseta Deportiva', level: 90 },
    { name: 'Zapatillas Running', level: 85 },
    { name: 'Balón Profesional', level: 80 },
    { name: 'Guantes de Entrenamiento', level: 75 },
    { name: 'Mochila Deportiva', level: 88 },
    { name: 'Licras Fitness', level: 82 }
  ],


  links: [
    { platform: 'Instagram', url: 'https://www.instagram.com/estebxn_4444/' },
    { platform: 'WhatsApp', url: 'https://web.whatsapp.com/', },
    { platform: 'Correo', url: 'http://mail.google.com/mail/u/1/?hl=es_419#sent/QgrcJHsbjCxlPKgGdXJTBfkgPwqHcZPVDCv', icon: }
  ],

  
  stats: {
    products: 120,
    categories: 8,
    clients: 950,
    rating: 4.6
  }
};


const userName = document.getElementById('userName');
const userTitle = document.getElementById('userTitle');
const userLocation = document.getElementById('userLocation');
const userBio = document.getElementById('userBio');
const avatarImg = document.getElementById('avatarImg');

const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');

const skillsList = document.getElementById('skillsList');
const toggleSkillsBtn = document.getElementById('toggleSkills');

const socialLinks = document.getElementById('socialLinks');
const statsContainer = document.getElementById('stats');

const themeToggle = document.getElementById('themeToggle');
const copyEmailBtn = document.getElementById('copyEmailBtn');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ============================================
// TODO 3: Renderizar información básica
// ============================================

const renderBasicInfo = () => {
  const {
    name,
    title,
    location,
    bio,
    avatar,
    contact: { email, phone }
  } = entityData;

  userName.textContent = name;
  userTitle.textContent = title;
  userLocation.textContent = `📍 ${location}`;
  userBio.textContent = bio;
  avatarImg.src = avatar;

  userEmail.textContent = email;
  userPhone.textContent = phone;
};



const renderItems = (showAll = false) => {
  const { items } = entityData;
  const itemsToShow = showAll ? items : items.slice(0, 4);

  skillsList.innerHTML = itemsToShow
    .map(({ name, level }) => `
      <div class="skill-item">
        <div class="skill-name">${name}</div>
        <div class="skill-level">
          <span>${level}%</span>
          <div class="skill-bar">
            <div class="skill-bar-fill" style="width: ${level}%"></div>
          </div>
        </div>
      </div>
    `)
    .join('');
};



const renderLinks = () => {
  const { links } = entityData;

  socialLinks.innerHTML = links
    .map(({ platform, url, icon }) => `
      <a href="${url}" target="_blank" class="social-link">
        <span>${icon}</span>
        <span>${platform}</span>
      </a>
    `)
    .join('');
};



const renderStats = () => {
  const { stats } = entityData;

  const statsArray = [
    { label: 'Productos', value: stats.products },
    { label: 'Categorías', value: stats.categories },
    { label: 'Clientes', value: stats.clients },
    { label: 'Rating', value: stats.rating }
  ];

  statsContainer.innerHTML = statsArray
    .map(({ label, value }) => `
      <div class="stat-item">
        <span class="stat-value">${value}</span>
        <span class="stat-label">${label}</span>
      </div>
    `)
    .join('');
};



const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme ?? 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  themeToggle.querySelector('.theme-icon').textContent =
    newTheme === 'dark' ? '☀️' : '🌙';

  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.querySelector('.theme-icon').textContent =
    savedTheme === 'dark' ? '☀️' : '🌙';
};



const copyInfo = () => {
  const {
    name,
    title,
    contact: { email }
  } = entityData;

  const text = `
${name}
${title}
Correo: ${email}
  `.trim();

  navigator.clipboard.writeText(text);
  showToast('📋 Información copiada al portapapeles');
};


const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};



let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;
  renderItems(showingAllItems);
  toggleSkillsBtn.textContent = showingAllItems
    ? 'Mostrar menos'
    : 'Mostrar más';
};



themeToggle.addEventListener('click', toggleTheme);
copyEmailBtn.addEventListener('click', copyInfo);
toggleSkillsBtn.addEventListener('click', handleToggleItems);


const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();
  console.log('✅ Tienda deportiva inicializada correctamente');
};

init();
