import * as THREE from 'three';

// Створюємо сцену
const scene = new THREE.Scene();

// Створюємо камеру
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Створюємо рендерер
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Створюємо геометрію куба
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Створюємо матеріал для куба
const material = new THREE.MeshBasicMaterial({ color: '#74BEB8' });

// Створюємо об'єкт Mesh для куба
const cube = new THREE.Mesh(geometry, material);

// Створюємо контур для куба
const edges = new THREE.EdgesGeometry(geometry); // Генерує лінії по гранях куба
const lineMaterial = new THREE.LineBasicMaterial({ color: '#28444B', linewidth: 5 }); // Білий колір
const wireframe = new THREE.LineSegments(edges, lineMaterial);

// Додаємо відображення контуру до об'єкта Mesh
// Створюємо групу для куба та контуру
const group = new THREE.Group();
group.add(cube); // Додаємо куб до групи
group.add(wireframe); // Додаємо контур до групи
scene.add(group); // Додаємо групу на сцену

// Встановлюємо початкову позицію камери
camera.position.z = 5;

// Обробник подій для зміни розміру вікна
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Функція анімації
function animate() {
    requestAnimationFrame(animate);

    // Обертання групи (куб і контур обертаються разом)
    group.rotation.x += 0.01;
    group.rotation.y += 0.01;

    // Рендеринг сцени
    renderer.render(scene, camera);
}

// Запуск анімації
animate();
