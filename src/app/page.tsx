"use client";

import React from "react";
import MovingMesh from "react-moving-mesh";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-12 bg-gradient-to-r from-slate-200 to-slate-100">
      <div className="grid grid-cols-1 gap-4 m-4">
        <div className="bg-white rounded-lg p-4 w-full">
          Demo app for the{" "}
          <a href="https://www.npmjs.com/package/react-moving-mesh">
            react-moving-mesh
          </a>{" "}
          react component.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
        <div className="card">
          <div className="card-panel">
            <MovingMesh
              fps={10}
              vertexCount={10}
              vertexFill={"#87CEEB"}
              radius={10}
              lineStroke="#FFA500"
            />
          </div>
          <div className="card-message">
            10 vertices, filled with #87CEEB color, and a vertex radius of 10.
            The lines are #FFA500. (10 fps)
          </div>
        </div>
        <div className="card">
          <div className="card-panel">
            <MovingMesh
              fps={15}
              vertexCount={15}
              vertexFill={"#FFA500"}
              radius={15}
              lineStroke="none"
              velocity={1}
              entropy={0.8}
            />
          </div>
          <div className="card-message">
            15 vertices, filled with #FFA500 color, and a vertex radius of 15.
            lineStroke is set to none. Velocity is 1 and entropy 0.8. (15 fps)
          </div>
        </div>
        <div className="card">
          <div className="card-panel">
            <MovingMesh
              fps={20}
              vertexCount={3}
              vertexFill={"#FFC0CB"}
              radius={20}
              lineStroke="#00FF00"
            />
          </div>
          <div className="card-message">
            3 vertices, filled with #FFC0CB color, and a vertex radius of 20.
            The lines are #00FF00. (20 fps)
          </div>
        </div>
        <div className="card">
          <div className="card-panel">
            <MovingMesh
              fps={10}
              vertexCount={10}
              vertexFill={"#00FF00"}
              radius={10}
              lineStroke="#FF0000"
              velocity={1.0}
            />
          </div>
          <div className="card-message">
            10 vertices, filled with #00FF00 color, and a vertex radius of 10.
            Velocity is set to 1.0. The lines are #FF0000. (25 fps)
          </div>
        </div>
        <div className="card">
          <div className="card-panel">
            <MovingMesh
              fps={30}
              vertexCount={30}
              vertexFill={"#FF0000"}
              radius={2}
              lineStroke="#FFFF00"
              gravity={0.01}
            />
          </div>
          <div className="card-message">
            30 vertices, filled with #FF0000 color, and a vertex radius of 2.
            The lines are #FFFF00. It has a gravity of 0.01. (30 fps)
          </div>
        </div>
        <div className="card">
          <div className="card-panel">
            <MovingMesh
              fps={35}
              vertexCount={5}
              vertexFill={"#800080"}
              radius={2}
              lineStroke="#800080"
              lineStrokeWidth={4}
              vertexStroke="none"
              vertexStrokeWidth={0}
            />
          </div>
          <div className="card-message">
            5 vertices, filled with the same color as the line (#800080), and a
            vertex radius of 2 and a lineStrokeWidth of 4. (35 fps)
          </div>
        </div>
        <div className="card">
          <div className="card-panel">
            <MovingMesh
              fps={40}
              vertexCount={10}
              vertexFill={"#e5e7eb"}
              vertexStroke="#008080"
              vertexStrokeWidth={4}
              radius={9}
              lineStroke="#008080"
              lineStrokeWidth={4}
            />
          </div>
          <div className="card-message">
            10 vertices, filled with the backgound colour and a
            vertexStrokeWidth the same as the lineStrokeWidth. (40 fps)
          </div>
        </div>
        <div className="card">
          <div className="card-panel">
            <MovingMesh
              fps={45}
              vertexCount={15}
              vertexFill={"#008080"}
              radius={4}
              lineStroke="#FF00FF"
              entropy={0.8}
              velocity={0.5}
            />
          </div>
          <div className="card-message">
            15 vertices, filled with #008080 color, and a vertex radius of 4.
            The lines are #FF00FF. It has an entropy of 0.8 and a velocity of
            0.5. (45 fps)
          </div>
        </div>
        <div className="card">
          <div className="card-panel">
            <MovingMesh
              fps={30}
              vertexCount={20}
              vertexFill={"#FF00FF"}
              radius={5}
              lineStroke="#87CEEB"
              gravity={-0.02}
            />
          </div>
          <div className="card-message">
            20 vertices, filled with #FF00FF color, and a vertex radius of 5.
            The lines are #87CEEB. It has a gravity of -0.02. (30 fps)
          </div>
        </div>
      </div>
    </main>
  );
}
