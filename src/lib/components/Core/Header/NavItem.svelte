<script lang='ts'>
   
   export let name:string = ''
   export let href:string = ''

   let klass:string = ''
   export { klass as class };
</script>

<li class=' {klass}'>
   <a {href} aria-label={name}>
      {name}
   </a>
</li>