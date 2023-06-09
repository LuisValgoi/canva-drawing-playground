import React, { LegacyRef, useEffect, useRef } from "react";

const Canvas: React.FC = () => {
  // refs
  const isDrawing = useRef<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | undefined>();
  const contextRef = useRef<CanvasRenderingContext2D | null | undefined>();

  const startDrawing = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (!contextRef || !contextRef.current) return;

    contextRef.current.beginPath();
    contextRef.current.moveTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    );
    isDrawing.current = true;
  };

  const finishDrawing = () => {
    if (!contextRef || !contextRef.current) return;

    contextRef.current.closePath();
    isDrawing.current = false;
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDrawing || !isDrawing.current) return;

    contextRef.current?.lineTo(
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    );
    contextRef.current?.stroke();
  };

  const setPixelDensity = (canvas: HTMLCanvasElement | undefined) => {
    if (!canvas) return;

    canvas.width = 1000 * 2;
    canvas.height = 487 * 2;
    canvas.style.width = `${1000}px`;
    canvas.style.height = `${487}px`;
  };

  const setPointerStyle = (
    context: CanvasRenderingContext2D | null | undefined
  ) => {
    if (!context) return;

    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    setPixelDensity(canvas);

    const context = canvas?.getContext("2d");
    setPointerStyle(context);

    contextRef.current = context;
  }, []);

  return (
    <canvas
      ref={canvasRef as LegacyRef<HTMLCanvasElement> | undefined}
      onMouseMove={draw}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
    />
  );
};

export default Canvas;
