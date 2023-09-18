const image = document.getElementById('main_picture');
const radius = document.getElementById('radius');
const blur = document.getElementById('blur');
const base = document.getElementById('base');

radius.addEventListener('input', handleUpdate);
blur.addEventListener('input', handleUpdate);
base.addEventListener('input', handleUpdate);

function handleUpdate() {
  image.style.borderRadius = `${radius.value}px`;
  image.style.filter = `blur(${blur.value}px`;

  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
