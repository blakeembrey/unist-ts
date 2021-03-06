export as namespace Unist

declare namespace Unist {
  // Syntactic units in unist syntax trees are called nodes.
  export interface Node {
    // The variant of a node.
    type: string

    // Information from the ecosystem.
    data?: Data

    // Location of a node in a source document.
    // Must not be present if a node is generated.
    position?: Position
  }

  // Location of a node in a source file.
  export interface Position {
    // Place of the first character of the parsed source region.
    start: Point

    // Place of the first character after the parsed source region.
    end: Point

    // Start column at each index (plus start line) in the source region,
    // for elements that span multiple lines.
    indent: number[]
  }

  // One place in a source file.
  export interface Point {
    // Line in a source file (1-indexed integer).
    line: number

    // Column in a source file (1-indexed integer).
    column: number

    // Character in a source file (0-indexed integer).
    offset: number
  }

  // Information associated by the ecosystem with the node.
  // Space is guaranteed to never be specified by unist or specifications
  // implementing unist.
  export interface Data {
    [key: string]: unknown
  }

  // Nodes containing other nodes.
  export interface Parent extends Node {
    // List representing the children of a node.
    children: Node[]
  }

  // Nodes containing a value.
  export interface Literal extends Node {
    // Any value
    value: unknown
  }
}
