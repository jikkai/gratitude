<template>
  <div class="site-bash">
    <div class="site-bash__body">
      <section>
        <span class="site-bash__body--code">$ echo "Hello Jikkai"</span>
        <div class="site-bash__body--cat">
          <a href="https://blog.asaki.me">
            <span>    /\_/\     </span>
            <span>  =( °w° )=   </span>
            <span>    )   (  // </span>
            <span>   (__ __)//  </span>
            <span>     BLOG     </span>
          </a>
          <nuxt-link to="/about">
            <span>    /\_/\     </span>
            <span>  =( °w° )=   </span>
            <span>    )   (  // </span>
            <span>   (__ __)//  </span>
            <span>    ABOUT     </span>
          </nuxt-link>
          <nuxt-link to="/link">
            <span>    /\_/\     </span>
            <span>  =( °w° )=   </span>
            <span>    )   (  // </span>
            <span>   (__ __)//  </span>
            <span>     LINK     </span>
          </nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
  @component-namespace site {
    @c bash {
      width: 100%;
      display: flex;
      justify-content: center;

      @d body {
        position: relative;
        max-width: 80%;
        color: #869E97 #353845;
        font-family: Monaco, Courier, 'Courier New', monospace;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        overflow: hidden;
        box-sizing: border-box;

        &:before {
          content: "";
          position: absolute 0 0 0 0;
          size: 100% 38px;
          line-height: 38px;
          background-image: linear-gradient(#E8E7E8, #D3D2D3);
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        &:after {
          content: "";
          position: absolute 0 * * 20px;
          size: 12px;
          margin-top: 12px;
          background: #FC625D;
          border-radius: 50%;
          box-shadow: 20px 0 #FDBC40, 40px 0 #35CD4B;
        }

        & section {
          size: 100%;
          padding: 48px 12px 32px;
          overflow: auto;
          box-sizing: border-box;
        }

        @m code {
          color: #FFF;
        }

        @m cat {
          margin-top: 18px;
          display: flex;

          & span {
            width: 100%;
            white-space: pre;
            outline: 0;
            display: block;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
