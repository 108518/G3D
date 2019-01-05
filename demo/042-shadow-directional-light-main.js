function main(
    G3D,
    { canvas, requestAnimationFrame }
) {

    const engine = new G3D.Engine(canvas);

    const scene = new G3D.Scene(engine);

    const camera = new G3D.RotatePerspectiveCamera(scene);
    camera.alpha = 45;
    camera.beta = 0;
    camera.radius = 6;
    camera.far = 50;

    const light = new G3D.DirectionalLight(scene);
    light.direction = { x: 0, y: 0, z: 10 };
    light.intensity = 0.3;
    light.castShadow = true;

    const m = G3D.MeshBuilder.createPlane(scene, 6, 4);
    m.position.z = -3;
    const m1 = G3D.MeshBuilder.createCone(scene, 0.3, 0.5);
    m1.position.x = -1;
    const m2 = G3D.MeshBuilder.createCube(scene, 0.5);
    const m3 = G3D.MeshBuilder.createCylinder(scene, 0.2, 0.5);
    m3.position.x = 1;

    function render() {
        m1.rotation.x += 1;
        m1.rotation.y += 0.7;
        m2.rotation.x += 1;
        m2.rotation.z += 0.7;
        m3.rotation.y += 1;
        m3.rotation.z += 0.7;
        scene.render();
        requestAnimationFrame(render);
    }
    render();

}

export default main;