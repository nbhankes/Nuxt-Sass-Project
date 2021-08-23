<template>
  <div class="mixin-container">
    <h2>The SASS @mixin</h2>
    <p>
      Mixins allow you to define styles that can be re-used throughout your
      stylesheet and project. In this example, I'll assume you are familiar with Nuxt.js and already have a project started.
    </p>

    <p>
      Once your @mixin rule is declared, simply add @include your-mixin-name to your CSS where you would normally include the property and a property value pair.
    </p>

    <p>
      Here's how to use SASS mixins in your next Nuxt project:
    </p>
    </br>
    <ul>
      <li>
        Add SASS to your Nuxt project: 

         <!-- Code highlighting docs: https://github.com/Llang8/nuxt-highlightjs -->
        <code v-highlight class="javascript codeblock">npm install --save-dev node-sass
        sass-loader@10 fibers @nuxtjs/style-resources
        </code>

      </li>
      <li>
        Next create an assets folder in the root directory. Create a SASS folder within the assets folder. Add a
        mixins.scss file inside of the SASS folder.
      </li>
      <li>
        Now go to your nuxt.config.js file. Add the following code:

        <code v-highlight class="javascript codeblock">
          buildModules: [ </br> &nbsp;&nbsp; '@nuxtjs/style-resources' </br> ], </br> </br> styleResources: { </br> &nbsp;&nbsp; scss: [ </br> 
         &nbsp;&nbsp;&nbsp;&nbsp; '~assets/scss/mixins.scss' &nbsp;&nbsp; </br> &nbsp;&nbsp;  ] </br> },
        </code>

      </li>
      <li>
        Now create your first @mixin in the mixins.scss file you created earlier. For this example, I'll create a mixin for
        setting up a flex container with centered flex-items:
       
        <code v-highlight class="css codeblock"
          >@mixin flex-center { </br> &nbsp;&nbsp; display: flex; </br> &nbsp;&nbsp; justify-content: center; </br> }
        </code>

      </li>
      <li>
        Navigate to a component and its style tag, adding the code below into a CSS declaration:

        <code v-highlight class="css codeblock"
          >.my-container { </br> &nbsp;&nbsp; @include flex-center </br> }
          </code>
      </li>
    </ul>
    <p>Congratulations! You just created your first SASS mixin!</p>
  </div>
</template>

<style lang="scss">
.codeblock {
  margin: 1rem 5%;
  padding: 1rem 1rem;
  border-radius: 5px;
  color: #f3f3f3;
  background: #131313;
}

.mixin-container {
  padding: 1rem 1rem;
  font-size: 1.25rem;
  color: #131313;

  h2 {
    text-align: center;
  }
}

li {
  margin-bottom: 1rem;
}

@media only screen and (max-width: 700px) {
  .code-block {
    margin: .5rem 2%;
    padding: .5rem .5rem;
    overflow: scroll;
  }

}
</style>