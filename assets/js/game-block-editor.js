(()=> {
    //create-guten-block >> bibliothèque de création de block wp
    const el = wp.element.createElement;
    const iconEl = el('svg', { width: 20, height: 20 },
    el('path', { d: "M80 320c0-11 5-19 12-17 6 1 14-6 16-15 2-11-2-18-12-18-9 0-16-6-16-14 0-7-9-16-20-19s-20-12-20-21-8-16-21-16c-18 0-20-5-17-52 2-41 7-54 20-56 15-3 18 4 18 32 0 29 4 36 20 36s20-7 20-35c0-24 5-35 15-35 8 0 15-7 15-15 0-10 11-15 35-15s35 5 35 15-11 15-35 15c-28 0-35 4-35 20 0 19 7 20 90 20s90-1 90-20c0-16-7-20-35-20-24 0-35-5-35-15s11-15 35-15 35 5 35 15c0 8 7 15 15 15 10 0 15 11 15 35 0 28 4 35 20 35s20-7 20-36c0-28 3-35 18-32 13 2 18 15 20 56 3 46 1 52-16 52-11 0-22 9-25 20s-12 20-21 20-16 7-16 15-7 15-16 15c-10 0-14 7-12 18 2 9 10 16 16 15 7-2 12 6 12 17s-7 20-15 20-15-7-15-15-9-15-20-15c-13 0-20-7-20-20 0-17-7-20-50-20s-50 3-50 20c0 13-7 20-20 20-11 0-20 7-20 15s-7 15-15 15-15-9-15-20zm68-103c2-12-3-17-17-17-12 0-21 6-21 13 0 31 32 34 38 4zm140 0c2-12-3-17-17-17-12 0-21 6-21 13 0 31 32 34 38 4z", transform:"matrix(.1 0 0 -.1 0 40)" } )
  );
    wp.blocks.registerBlockType("game/mygame", {
      title: "My Game",
      icon: iconEl,
      category: "widgets",
      attributes: {},
      edit: function (props) {

        // function updateBlockWidth(e) {
        //   props.setAttributes({ blockWidth: parseInt(e.target.value) });
        // }
        // function updateBlocHeight(e) {
        //   props.setAttributes({ blockHeight: parseInt(e.target.value) });
        // }
    
        return wp.element.createElement(
          "div",
          {class: 'game-container'
        });
      },
    
      save: function (props) {
        // return wp.element.createElement("div", {
        //   class: "tarot-card-container",
        //   style: "border:1px solid black;width:"+props.attributes.blockWidth+"px; height:"+props.attributes.blockHeight+"px",
        // });
        return wp.element.createElement("div", {
          class: "game-container"
        })
      },
    });
  })()
  
  