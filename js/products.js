/* PRODUCT DATA: edit here to add / rename cards. item = [name, icon, tag, description] */
var C = {
  flanges: {
    name: "Flanges", icon: "fl", page: "flanges.html",
    blurb: "Blind, welding neck, slip-on, plate and E table flanges for bolted pipe joints.",
    intro: "MS flanges for joining pipes, valves and equipment. Choose a type to request a quotation.",
    items: [
      ["Blind Flanges", "bl", "Closure", "Used to close or seal the end of a pipe or vessel opening."],
      ["Welding Neck Flanges", "wn", "Butt-weld", "Long tapered neck welded to the pipe for strong, leak-tight joints."],
      ["Slip-On Flanges", "fl", "Slip-on", "Slips over the pipe and is then welded in place."],
      ["Plate Flanges", "pl", "Flat plate", "Flat plate-type flanges cut and drilled to your specification."],
      ["E Table Flanges", "fl", "Table E", "Flanges drilled to Table E (Indian Standard) as per your drawing."]
    ]
  },
  fittings: {
    name: "Fittings", icon: "el", page: "fittings.html",
    blurb: "Elbows, tees, reducers and caps to turn, branch, resize and close piping runs.",
    intro: "Pipe fittings for changes in direction, branching, size transition and closure.",
    items: [
      ["Elbows", "el", "Direction", "Change the direction of a pipeline."],
      ["Tees", "te", "Branch", "Create branch connections in a pipeline."],
      ["Reducers", "re", "Size change", "Join pipes of different sizes."],
      ["End Caps", "ca", "Closure", "Close the end of a pipe."]
    ]
  },
  pipes: {
    name: "Pipes", icon: "pi", page: "pipes.html",
    blurb: "MS industrial pipes for water, process and general engineering piping.",
    intro: "MS pipes for industrial piping systems. Sizes and schedules are confirmed at quotation.",
    items: [
      ["ERW Pipes", "pi", "Welded", "Electric resistance welded pipes for general industrial use."],
      ["Seamless Pipes", "pi", "Seamless", "Seamless pipes for higher-pressure services."],
      ["Black Pipes", "pi", "Black finish", "Plain black MS pipes for general piping and structural use."],
      ["Galvanised Pipes", "pi", "Coated", "Zinc-coated pipes for added corrosion resistance."]
    ]
  }
};
var KEYS = ["flanges", "fittings", "pipes"];
