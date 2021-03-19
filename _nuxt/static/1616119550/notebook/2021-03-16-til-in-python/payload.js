__NUXT_JSONP__("/notebook/2021-03-16-til-in-python", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG){return {data:[{note:{slug:"2021-03-16-til-in-python",description:"Using NumPy for RNG Selection",title:"TIL in Python",date:"2020-03-16T00:00:00.000Z",tags:[P,Q,R],toc:[],body:{type:"root",children:[{type:b,tag:r,props:{},children:[{type:a,value:"In roguelike games, it is usually the case that we want to use randomization to scatter assets around a level or area during generation. This can be items, monsters, or even the distribution of the tiles themselves. For my own projects, I like to generate levels by first laying down a base tile, either the most general \"floor\" or \"wall\" type depending on if it's an open area or an indoor space. Once the base tile is down, I will often have several steps of walking through the tilemap and randomly placing some other asset. For instance, if my area is an open field, I might randomly place one or two variants of grass tiles to give the map some texture."}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"My usual method for this is to simply \"flip a coin\" or do a \"dice roll\". Say I have a map that is 64x64 tiles, then:"}]},{type:a,value:m},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:G}]},{type:a,value:" x "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:H}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:G}]},{type:a,value:" y "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:H}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:J}]},{type:a,value:" tilemap"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n            roll "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:" random"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"randrange"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:J}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:J}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ag}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:J}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ag}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:m}]}]}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"For each tile in the tilemap, I check if the tile is unformed - that is, it has no style applied to it yet and must be given a concrete tile type. If it is unformed, I do a roll for some value between 0 and 100. Then, I assign ranges of that roll as thresholds for different tile types. If the roll fell between 10 and 20 for position (23, 41), for example, the unformed tile at that position would be replaced with a grass type tile."}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"This works alright, but it's a bit hamfisted. It's not the fastest and, if we're being honest, it's just not very sexy."}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"In discussing procgen methods with some folks over at the RoguelikeDev Discord, it was brought to my attention that NumPy has some slick ways of doing this. With the initial help of some other devs and a bit of tinkering, I settled on this implementation:"}]},{type:a,value:m},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"def"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"\n        tile_space"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\n        mask_type"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\n        fill_type"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\n        asset_list"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:" List"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"Tuple"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"int"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"-"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003E"}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n    selection_set "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n\n    low "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:C}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:G}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:H}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:" threshold\n\n    mask "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aD}]},{type:a,value:aE}]}]}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"When I initialize my tilemap (the "},{type:b,tag:n,props:{},children:[{type:a,value:"TileSpace"}]},{type:a,value:"), I'll do something like the following:"}]},{type:a,value:m},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:n,props:{},children:[{type:a,value:$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"zeros"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" dtype"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"object"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" order"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"\"F\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\ntile_space"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n\nrng_selection"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"\n    tile_space"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"dirt_2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:m}]}]}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"Now "},{type:b,tag:"em",props:{},children:[{type:a,value:"that"}]},{type:a,value:" is hot. Let's break down what's happening here."}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"In the "},{type:b,tag:n,props:{},children:[{type:a,value:ak}]},{type:a,value:" function, I pass in the tilemap ("},{type:b,tag:n,props:{},children:[{type:a,value:ac}]},{type:a,value:") to work with. I also pass in a "},{type:b,tag:n,props:{},children:[{type:a,value:"mask_type"}]},{type:a,value:", which is the tile type we're saying is okay to replace; a "},{type:b,tag:n,props:{},children:[{type:a,value:_}]},{type:a,value:", which is the tile type we'll use to fill anything that doesn't get covered during the randomization process; and finally an "},{type:b,tag:n,props:{},children:[{type:a,value:"asset_list"}]},{type:a,value:", which is a list of tuples that assign a high threshold to a tile type. That is, just like in our clunkier example we assigned tile types to ranges, like "},{type:b,tag:n,props:{},children:[{type:a,value:"10:20"}]},{type:a,value:" for "},{type:b,tag:n,props:{},children:[{type:a,value:"Tiles.grass()"}]},{type:a,value:", we're providing the upper bound of each threshold in our asset listing. That would be the "},{type:b,tag:n,props:{},children:[{type:a,value:M}]},{type:a,value:", in the relevant example."}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"The reason we pass in just the upper bound is because we're going to be algorithmically setting the lower bound inside the randomization function. Alright, so let's check out what's happening there."}]},{type:a,value:m},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"    selection_set "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:m}]}]}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"First, we set up a NumPy array to hold our selection ranges. We initialize it with a fill type, in this case the "},{type:b,tag:n,props:{},children:[{type:a,value:"Tiles.dirt_2"}]},{type:a,value:" tile type."}]},{type:a,value:m},{type:b,tag:N,props:{style:O,src:"\u002Frng_selections_1.svg"},children:[]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"Next, we need to iterate through our asset list. On each iteration we want to take the upper bound of the previous asset and set that as our new "},{type:b,tag:n,props:{},children:[{type:a,value:F}]},{type:a,value:" value."}]},{type:a,value:m},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"    low "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:C}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:G}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ap},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:H}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:" threshold\n"}]}]}]},{type:a,value:m},{type:b,tag:N,props:{style:O,src:"\u002Frng_selections_2.svg"},children:[]},{type:a,value:m},{type:b,tag:N,props:{style:O,src:"\u002Frng_selections_3.svg"},children:[]},{type:a,value:m},{type:b,tag:N,props:{style:O,src:"\u002Frng_selections_4.svg"},children:[]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"Once our selection array is initialized, we exploit NumPy's ability to use arrays as masks to walk through our tilespace and, for every cell we find that is currently set to "},{type:b,tag:n,props:{},children:[{type:a,value:"Tiles.unformed()"}]},{type:a,value:", we apply our "},{type:b,tag:n,props:{},children:[{type:a,value:ad}]},{type:a,value:" to that cell. I like to think of this sort of like how a slot machine works, where you pull a lever and a cylinder with a set of possible outcomes spins until it comes to a rest on a final value. Applying the "},{type:b,tag:n,props:{},children:[{type:a,value:ad}]},{type:a,value:" amounts to masking it with a separate array from NumPy's "},{type:b,tag:n,props:{},children:[{type:a,value:aa}]},{type:a,value:" module; we can roll a value between 0 and 100 (or however big our "},{type:b,tag:n,props:{},children:[{type:a,value:ad}]},{type:a,value:" is) across an array that matches the dimensions of our input array."}]},{type:a,value:m},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"    mask "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ay},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:aD}]},{type:a,value:aE}]}]}]},{type:a,value:m},{type:b,tag:r,props:{},children:[{type:a,value:"The "},{type:b,tag:"a",props:{href:"https:\u002F\u002Fnumpy.org\u002Fdoc\u002Fstable\u002Freference\u002Fgenerated\u002Fnumpy.putmask.html",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:ab}]},{type:a,value:" method is very useful, and I recommend reading up on it! It has tons of applications for roguelike games."}]}]},dir:"\u002Fnotes",path:"\u002Fnotes\u002F2021-03-16-til-in-python",extension:".md",createdAt:"2021-03-16T14:58:15.148Z",updatedAt:"2021-03-19T02:04:32.516Z"},tags:{gamedev:{slug:R,name:R},numpy:{slug:Q,name:Q},python:{slug:P,name:P}}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","operator",",","(",")","="," ","number","\n","code",".",":","keyword","p","[","]","64"," Tiles","\n    ","div","nuxt-content-highlight","pre","language-python","line-numbers","0","100"," np","low","for","in","builtin","if","x"," y","20","img","padding: 20px 0;","python","numpy","gamedev","==","unformed","\n            "," roll ","\u003C=","10","\n                tilemap"," TileType","fill_type","tile_space ","random","putmask","tile_space","selection_set","range","tree_1","\u003C","grass","40","tall_grass","rng_selection"," TileSpace","full"," fill_value"," threshold"," tile_type "," asset_list","\n        selection_set","threshold"," tile_type\n        low "," mask_type","\n    rng_samples ","randint"," high"," size","\n\n    np"," mask"," selection_set","rng_samples","return"," tile_space\n","\n    Tiles","\n     ")));