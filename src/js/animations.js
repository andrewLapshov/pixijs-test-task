export const pulseAnimation = (node) => {
  let isUp = true;
  return (delta) => {
    if (isUp ? node.scale.x < 1.05 : node.scale.x > 1) {
      node.scale.set(
        node.scale.x + (isUp ? 0.001 * delta : -0.001 * delta),
        node.scale.y + (isUp ? 0.001 * delta : -0.001 * delta)
      );
    } else {
      isUp = !isUp;
    }
  };
};

export const scaleInAnimation = (node) => {
  let dScale = 0.07;
  let phase = 0;
  return (delta) => {
    if (phase > 1) {
      return;
    }
    if (phase === 0 ? node.scale.x < 1.05 : node.scale.x > 1) {
      node.scale.set(
        node.scale.x + (phase === 0 ? dScale * delta : -1 * dScale * delta),
        node.scale.y + (phase === 0 ? dScale * delta : -1 * dScale * delta)
      );
    } else {
      phase += 1;
    }
  };
};

export const fallDownAnimation = (node) => {
  let deltaY = 1;
  let phase = 0;
  return () => {
    if (phase > 6) {
      return;
    }
    node.dy = deltaY;
    deltaY += 1;
    if (
      (phase === 0 && deltaY < 10) ||
      (phase === 2 && deltaY < 7) ||
      (phase === 4 && deltaY < 3)
    ) {
      node.y += node.dy;
    } else if ((phase === 1 && deltaY < 7) || (phase === 3 && deltaY < 3)) {
      node.y -= node.dy;
    } else {
      phase += 1;
      deltaY = 1;
    }
  };
};

export const fadeInAndMoveDownAnimation = (node) => {
  let deltaY = 50;
  return () => {
    if (deltaY > 0 || node.alpha < 1) {
      node.alpha += 0.09;
      node.dy = deltaY;
      node.position.y += node.dy;
      deltaY = deltaY / 1.5;
    }
  };
};

export const fadeInAnimation = (node) => {
  return () => {
    if (node.alpha < 1) {
      node.alpha += 0.03;
    }
  };
};

export const bubbleAnimation = (node) => {
  let dScale = 0.1;
  let phase = 0;
  return (delta) => {
    if (phase > 4) {
      return;
    }
    if (
      (phase === 0 && node.scale.x < 1.2) ||
      (phase === 2 && node.scale.x < 1)
    ) {
      node.scale.set(
        node.scale.x + dScale * delta,
        node.scale.y + dScale * delta
      );
      dScale *= 0.95;
    } else if (phase === 1 && node.scale.x > 0.9) {
      node.scale.set(
        node.scale.x - dScale * delta,
        node.scale.y - dScale * delta
      );
      dScale *= 0.95;
    } else {
      phase += 1;
    }
  };
};
