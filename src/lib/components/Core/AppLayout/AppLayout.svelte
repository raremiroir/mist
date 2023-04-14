<script lang="ts">
   import '$lib/theme/mist-theme.postcss';
   import '$src/app.postcss'

   import gen from '$lib/theme/generator';

   // const myColors = gen.color.obj([
   //    {color: '#54648e', name: 'primary'}, 
   //    {color: '#54818e', name: 'secondary'}, 
   //    {color: '#005544', name: 'tertiary'}]
   //    );
   // console.log(myColors);

   const classes = gen.box.allClasses();
   console.log(classes);
   
</script>

<div class="">
   <slot/>
</div>