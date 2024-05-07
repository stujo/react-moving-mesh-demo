"use client";

import React from "react";
import MovingMesh from "react-moving-mesh";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4">
          <div className="bg-gray-200 p-2">
            <MovingMesh
              fps={10}
              vertexCount={10}
              vertexFill={"#87CEEB"}
              radius={10}
              lineStroke="#FFA500"
            />
          </div>
          <div className="text-gray-700">
            10 vertices, filled with #87CEEB color, and a vertex radius of 10.
            The lines are stroke with #FFA500 color.
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="bg-gray-200 p-2">
            <MovingMesh
              fps={15}
              vertexCount={15}
              vertexFill={"#FFA500"}
              radius={15}
              lineStroke="none"
            />
          </div>
          <div className="text-gray-700">
            15 vertices, filled with #FFA500 color, and a vertex radius of 15.
            The lines are not stroke.
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="bg-gray-200 p-2">
            <MovingMesh
              fps={20}
              vertexCount={3}
              vertexFill={"#FFC0CB"}
              radius={20}
              lineStroke="#00FF00"
            />
          </div>
          <div className="text-gray-700">
            3 vertices, filled with #FFC0CB color, and a vertex radius of 20.
            The lines are stroke with #00FF00 color.
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="bg-gray-200 p-2">
            <MovingMesh
              fps={25}
              vertexCount={25}
              vertexFill={"#00FF00"}
              radius={10}
              lineStroke="#FF0000"
            />
          </div>
          <div className="text-gray-700">
            25 vertices, filled with #00FF00 color, and a vertex radius of 10.
            The lines are stroke with #FF0000 color.
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="bg-gray-200 p-2">
            <MovingMesh
              fps={30}
              vertexCount={30}
              vertexFill={"#FF0000"}
              radius={2}
              lineStroke="#FFFF00"
              gravity={0.01}
            />
          </div>
          <div className="text-gray-700">
            30 vertices, filled with #FF0000 color, and a vertex radius of 2.
            The lines are stroke with #FFFF00 color. It has a gravity of 0.01.
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="bg-gray-200 p-2">
            <MovingMesh
              fps={35}
              vertexCount={35}
              vertexFill={"none"}
              radius={5}
              lineStroke="#800080"
              vertexStroke="#FFFF00"
              vertexStrokeWidth={2}
            />
          </div>
          <div className="text-gray-700">
            35 vertices, not filled, and a vertex radius of 5. The lines are
            stroke with #800080 color. The vertices are stroke with #FFFF00
            color and have a stroke width of 2.
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="bg-gray-200 p-2">
            <MovingMesh
              fps={40}
              vertexCount={40}
              vertexFill={"#800080"}
              radius={3}
              lineStroke="#008080"
            />
          </div>
          <div className="text-gray-700">
            40 vertices, filled with #800080 color, and a vertex radius of 3.
            The lines are stroke with #008080 color.
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="bg-gray-200 p-2">
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
          <div className="text-gray-700">
            15 vertices, filled with #008080 color, and a vertex radius of 4.
            The lines are stroke with #FF00FF color. It has an entropy of 0.8
            and a velocity of 0.5.
          </div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="bg-gray-200 p-2">
            <MovingMesh
              fps={30}
              vertexCount={20}
              vertexFill={"#FF00FF"}
              radius={5}
              lineStroke="#87CEEB"
              gravity={-0.02}
            />
          </div>
          <div className="text-gray-700">
            20 vertices, filled with #FF00FF color, and a vertex radius of 5.
            The lines are stroke with #87CEEB color. It has a gravity of -0.02.
          </div>
        </div>
      </div>
    </main>
  );
}
