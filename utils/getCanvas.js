export default function getCanvas(){
  console.log('canvas');
  var camera, scene, renderer;
  var geometry, material, mesh;
  
  // Renderer
  if (window.WebGLRenderingContext)
    renderer = new THREE.WebGLRenderer({alpha: true});
  else
    renderer = new THREE.CanvasRenderer({alpha: true});
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.append(renderer.domElement);
  
  //Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;
  
  // Scene
  scene = new THREE.Scene();
  
  // Props
  geometry = new THREE.CubeGeometry(200, 200, 200);
  material = new THREE.MeshDepthMaterial({
    color: 0xf5f5f5,
    wireframe: false,
    wireframeLinewidth: 6
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  var animate = function() {
    requestAnimationFrame(animate);
    mesh.rotation.x = Date.now() * 0.0005;
    mesh.rotation.y = Date.now() * 0.001;
    renderer.render(scene, camera);
  };
  animate();
  
  //controls = new THREE.TrackballControls( camera );
  //controls.target.set( 0, 0, 0 )
}