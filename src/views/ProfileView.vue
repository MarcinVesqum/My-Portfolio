<template>
  <div class="about section">
    <div class="container">
      <div class="row">
        <div class="section__title padding-15">
          <h2>About</h2>
        </div>
      </div>
      <div class="row">
        <div class="about__content padding-15">
          <div class="row">
            <div class="about__text padding-15">
              <h3>I'm Marcin Pełszyk and <span>Web Developer</span></h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorem vero exercitationem  nisi pariatur tempora 
                veniam saepe repudiandae molestias ex.Lorem ipsum dolor 
                consectetur adipisicing elit. 
                sit amet 
                Dolorem vero exercitationem  nisi pariatur tempora 
                veniam saepe repudiandae molestias ex.
              </p>
            </div>
          </div>
          
          <div class="row">
            <div class="about__personal">
              <div class="padding-15  about__personal__info">
                <div class="row">
                  <div class="about__personal__info__item padding-15">
                    <p>Birthday : <span>18 nov 1990</span></p>
                  </div>
                  <div class="about__personal__info__item padding-15">
                    <p>Age : <span>32</span></p>
                  </div>
                  <div class="about__personal__info__item padding-15">
                    <p>Website : <span>www.domain.com</span></p>
                  </div>
                  <div class="about__personal__info__item padding-15">
                    <p>Phone : <span>+48 695 701 713</span></p>
                  </div>
                  <div class="about__personal__info__item padding-15">
                    <p>City : <span>Białystok</span></p>
                  </div>
                </div>
                <div class="row">
                  <div class="about__buttons padding-15">
                    <ButtonComponent>
                      <a href="https://www.canva.com/design/DAE2iKlFxww/L6blmOaYCqH0SigIseR7AA/view?utm_content=DAE2iKlFxww&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" class="about__buttons--btn button">Download CV</a>
                    </ButtonComponent>
                    <ButtonComponent>
                      <router-link class="about__buttons--btn button" :to="{ name: 'contact' }">Hire me</router-link>
                    </ButtonComponent>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="padding-15 about__personal__skill">
                  <!-- skill 1 -->
                  <div class="about__personal__skill__item padding-15">
                    <IconCss class="about__personal__skill__item--icon"  style="margin-left: -20px;"/>
                    <div class="about__personal__skill__item__progress">
                      <div class="about__personal__skill__item__progress--in-css" style="width: 50%;"></div>
                      <div class="about__personal__skill__item__progress--skill">
                        medium
                      </div>
                    </div>
                  </div>
                   <!-- skill 2  -->
                   <div class="about__personal__skill__item padding-15">
                    <IconHtml class="about__personal__skill__item--icon"  style="margin-left: -20px;"/>
                    <div class="about__personal__skill__item__progress">
                      <div class="about__personal__skill__item__progress--in-html" style="width: 50%;"></div>
                      <div class="about__personal__skill__item__progress--skill">
                        medium
                      </div>
                    </div>
                  </div> 
                  <!-- skill 3 -->
                  <div class="about__personal__skill__item padding-15">
                    <IconVue class="about__personal__skill__item--icon" style="margin-left: -20px;"/>
                    <div class="about__personal__skill__item__progress">
                      <div class="about__personal__skill__item__progress--in-vue" style="width: 50%;"></div>
                      <div class="about__personal__skill__item__progress--skill">
                        medium
                      </div>
                    </div>
                  </div> 
                  <!-- skill 4 -->
                  <div class="about__personal__skill__item padding-15">
                    <IconFigma class="about__personal__skill__item--icon" style="margin-left: -20px;"/>
                    <div class="about__personal__skill__item__progress">
                      <div class="about__personal__skill__item__progress--in-figma" style="width: 20%;"></div>
                      <div class="about__personal__skill__item__progress--skill">
                        basic
                      </div>
                    </div>
                  </div> 
                  <!-- skill 5 -->
                  <div class="about__personal__skill__item padding-15">
                    <IconGit class="about__personal__skill__item--icon" style="margin-left: -15px;"/>
                    <div class="about__personal__skill__item__progress">
                      <div class="about__personal__skill__item__progress--in-git" style="width: 50%;"></div>
                      <div class="about__personal__skill__item__progress--skill">
                        medium
                      </div>
                    </div>
                  </div> 
                  <!-- skill 6 -->
                  <div class="about__personal__skill__item padding-15">
                    <IconFire class="about__personal__skill__item--icon" style="margin-left: -20px;"/>
                    <div class="about__personal__skill__item__progress">
                      <div class="about__personal__skill__item__progress--in-fire" style="width: 20%;"></div>
                      <div class="about__personal__skill__item__progress--skill">
                        basic
                      </div>
                    </div>
                  </div>
                  <!-- skill 7 -->
                  <div class="about__personal__skill__item padding-15">
                    <IconJs class="about__personal__skill__item--icon" style="margin-left: -20px;"/>
                    <div class="about__personal__skill__item__progress">
                      <div class="about__personal__skill__item__progress--in-js" style="width: 50%;"></div>
                      <div class="about__personal__skill__item__progress--skill">
                        medium
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="about__education padding-15">
              <h3 class="about__education__title">Education</h3>
              <div class="row">
                <div class="about__education__timeline-box padding-15">
                  <div class="about__education__timeline-box__timeline shadow-dark">
                    <!-- timeline item -->
                    <div class="about__education__timeline-box__item">
                      <div class="cirlce-dot"></div>
                      <h3 class="about__education__timeline-box__item__date">
                        <ion-icon name="calendar-outline"></ion-icon> 9.2009 – 06.2012
                      </h3>
                      <h4 class="about__education__timeline-box__item__title">
                        Liceum ekonomiczne im. Jana Pawła II w Białymstoku
                        Specjalizacja: Ekonomia
                      </h4>
                    </div>

                    <div class="about__education__timeline-box__item">
                      <div class="cirlce-dot"></div>
                      <h3 class="about__education__timeline-box__item__date">
                        <ion-icon name="calendar-outline"></ion-icon> 11.2021 - obecnie
                      </h3>
                      <h4 class="about__education__timeline-box__item__title">
                        Academy of New York 
                        Organizator: Academy of New York
                      </h4>
                    </div>
                    <div class="about__education__timeline-box__item">
                      <div class="cirlce-dot"></div>
                      <h3 class="about__education__timeline-box__item__date">
                        <ion-icon name="calendar-outline"></ion-icon> 09.2021 - 12.2021
                      </h3>
                      <h4 class="about__education__timeline-box__item__title">
                        JavaScript Specoalist: React + Redux
                        Organizator: CodersLab
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="about__experience padding-15">
              <h3 class="about__experience__title">Experience</h3>
              <div class="row">
                <div class="about__experience__timeline-box padding-15">
                  <div class="about__experience__timeline-box__timeline shadow-dark">
                    <!-- timeline item -->
                    <div class="about__experience__timeline-box__item">
                      <div class="cirlce-dot"></div>
                      <h3 class="about__experience__timeline-box__item__date">
                        <ion-icon name="calendar-outline"></ion-icon> 06.2022 – obecnie
                      </h3>
                      <h4 class="about__experience__timeline-box__item__title">
                        Liceum ekonomiczne im. Jana Pawła II w Białymstoku
                        Specjalizacja: Ekonomia
                      </h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  </div>
               
</template>
<script setup>
import IconCss from '../assets/img/css-3.svg?component'
import IconHtml from '../assets/img/html-1.svg?component'
import IconJs from '../assets/img/logo-javascript.svg?component'
import IconFigma from '../assets/img/figma-1.svg?component'
import IconGit from '../assets/img/git-icon.svg?component'
import IconFire from '../assets/img/sketch-2.svg?component'
import IconVue from '../assets/logo.svg?component'
</script>
<style lang="scss">
$colors: (
"css":rgb(25, 135, 214),
"html":rgb(255, 89, 0), 
"vue":rgb(10, 116, 45), 
"figma":rgb(19, 178, 181),
"git":rgb(209, 100, 41),
"fire":rgb(217, 159, 22),
"js":rgb(250, 238, 10)
);
.about {
  &__content {
    flex: 0 0 100%;
    max-width: 100%;
  }
  &__text {
    flex: 0 0 100%;
    max-width: 100%;
    h3 {
      font-size: 24px;
      margin-bottom: 15px;
      color: var(--text-black);
      span {
        font-size: 32px;
        font-weight: bold;
        color: var(--btn);
      }
    }
    p {
      font-size: 16px;
      line-height: 25px;
      color: var(--text-black);
      
    }
  }
  &__personal {
    display: flex;
    &__info {
      
      flex: 0 0 60%;
      max-width: 60%;
      margin-top: 40px;
      &__item {
        flex: 0 0 50%;
        max-width: 50%;
        p {
          font-weight: 600;
          padding: 10px 0;
          font-size: 16px;
          color: var(--text-black);
          border-bottom: 1px solid rgb(114, 114, 114);
          span {
            font-weight: 400;
            color: var(--text-black);
            margin-left: 10px;
            display: inline-block;
          }
        }
      }
    }
    &__skill {
      flex: 0 0 40%;
      max-width: 40%;
      margin-top: 40px;
      &__item {
        flex: 0 0 100%;
        max-width: 100%;

        &--icon {
          width: 40px;
        }
        &__progress {
          position: relative;
          @each $name, $color in $colors {
            &--in-#{$name} {
              height: 5px;
              background-color: $color;
              position: absolute;
              left: 0;
              top: 0;
              border-radius: 10px;
              
            }
          }
          &--skill {
            line-height: 40px;
            font-weight: 600;
            color: var(--text-black);
            text-transform: capitalize;
          }
        }
      }
    }
  }
  &__education,
  &__experience  {
    margin-top: 40px;
    flex: 0 0 50%;
    max-width: 50%;
    &__title {
      font-size: 24px;
      font-weight: 700;
      color: var(--text-black);
    }
    &__timeline-box {
      flex: 0 0 100%;
      max-width: 100%;
      &__timeline {
        background-color: var(--bg-black-100);
        padding: 30px 15px;
        border: 1px solid var(--bg-black-50);
        border-radius: 10px;
        width: 100%;
        position: relative;
      }
      &__item {
        position: relative;
        padding-left: 20px;
        padding-bottom: 20px;
        &:last-child {
          padding-bottom: 0;
        }
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 7px;
          height: 100%;
          width: 2px;
          background-color: var(--btn);
        }
        .cirlce-dot {
          position: absolute;
          left: 0;
          top: 0;
          height: 15px;
          width: 15px;
          border-radius: 50%;
          background-color: var(--btn);
        }
        &__date {
          font-weight: 400;
          font-size: 14px;
          margin-bottom: 5px;
          color: var(--text-black-700);
        }
      }
    }
  }

  &__buttons {
    margin-top: 300px;
    &--btn {
      margin-right: 15px;


    }
  }

}
</style>
