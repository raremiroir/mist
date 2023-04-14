<script lang="ts">
   import '$src/app.postcss'

   import gen from '$lib/theme/generator';

   // const myColors = gen.color.obj([
   //    {color: '#54648e', name: 'primary'}, 
   //    {color: '#54818e', name: 'secondary'}, 
   //    {color: '#005544', name: 'tertiary'}]
   //    );
   // console.log(myColors);

   const box = gen.box.full();
   console.log(box);
   
</script>

<slot/>