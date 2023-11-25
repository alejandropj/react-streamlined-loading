import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css'; 


import aguila from "./../assets/images/aguila.jpg"
import placeholderAguila from "./../assets/images/aguila-lazy.jpg"

import lince from "./../assets/images/lince.jpg"
import placeholderLince from "./../assets/images/lince-lazy.jpg"

import paloma from "./../assets/images/paloma.jpg"
import placeholderPaloma from "./../assets/images/paloma-lazy.jpg"

import lobo from "./../assets/images/lobo.jpg"
import placeholderLobo from "./../assets/images/lobo-lazy.jpg"


export default class LazyReact extends Component {
  render() {

    return (
      <div className='px-5 mx-5'>
        <h1 className='text-center'>Lazy React</h1>
        <div id="lipsum">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque sagittis, pretium orci quis, ultricies est.
            Aliquam risus elit, viverra quis imperdiet at, volutpat et purus. Vivamus rutrum pulvinar placerat.
            Pellentesque ac dolor non nisi tempus lobortis quis ac nulla. Vestibulum ac purus nec sem blandit ullamcorper.
            In lacus purus, rutrum ac diam vel, posuere tempor orci. Pellentesque pulvinar ac est id ultricies. Sed id rutrum ex.
            Donec nisi elit, luctus sed rhoncus ut, rhoncus eu lectus. Pellentesque vitae ultrices metus.
            Quisque id egestas ipsum, a dignissim quam. Nunc in commodo eros, et ullamcorper urna.
            Cras scelerisque est sed nunc posuere mollis. Nullam efficitur arcu ac interdum fermentum.
            Mauris ornare magna eros, vitae mattis tortor laoreet et. Donec quis fringilla nunc, ac iaculis est.
          </p>
          <p>
            Duis eu justo et eros fermentum elementum sit amet vel elit. Ut tempor, turpis nec posuere efficitur,
            turpis elit vehicula massa, quis accumsan magna risus eu tortor. Donec imperdiet sapien vel posuere tempor.
            Fusce volutpat pellentesque risus eu ultricies. Maecenas egestas iaculis malesuada. Etiam lacinia sollicitudin est eu tempor.
            Nullam ac venenatis lorem. In eu nisi diam. Nam tristique felis non venenatis finibus. Nunc id volutpat mauris.
            Duis congue sagittis elit ut rutrum. Nulla augue sem, vehicula et maximus a, gravida non elit.
          </p>

          <div className='text-center'>
            {/* <img src={aguila} alt="Hienas" className="mx-auto d-block"  /> */}
            <LazyLoadImage src={aguila}
              placeholderSrc={placeholderAguila}
              alt='Aguila'
              effect="blur"
              style={{ width: "550px", height: "350px" }}
            />

          </div>
          
          <p>
            Nam pulvinar porta auctor. Etiam suscipit, arcu sed pharetra elementum, metus ipsum sagittis mauris, a laoreet nunc enim eu mauris.
            Donec cursus mollis justo ornare consequat. Phasellus nec dui consectetur, rutrum magna non, finibus diam.
            Vestibulum nisl erat, ullamcorper et facilisis porta, consequat id tortor. Nullam gravida nec risus vel mollis.
            Nunc feugiat sagittis turpis. Duis porta libero luctus maximus pulvinar.
          </p>
          <p>
            Mauris hendrerit feugiat eros, auctor interdum elit iaculis ut. Pellentesque vitae ultricies sapien, non elementum erat.
            Cras auctor aliquet lectus in vulputate. In ut odio lectus. Ut non malesuada metus.
            Aenean lacinia ligula nec leo gravida, in ultricies est faucibus. Nam enim orci, condimentum eget dictum id, malesuada ac nunc.
            Aliquam elementum ipsum et odio euismod, quis venenatis mauris malesuada. Nulla facilisi. Duis vitae condimentum leo, at cursus augue.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc quis dictum massa, sit amet facilisis ante.
            Sed a bibendum quam, sit amet auctor est.
          </p>
          <div className='text-center'>
            {/* <img src={lince} alt="Hienas" className="mx-auto d-block"  /> */}
            <LazyLoadImage src={lince}
              placeholderSrc={placeholderLince}
              effect="blur"
              alt='Lince'
              style={{ width: "550px", height: "350px" }}
            />
          </div>
          <p>
            Sed placerat porttitor velit, at facilisis felis sodales id. Quisque ut feugiat elit. Nam eget finibus tellus. Nulla ut bibendum lacus.
            Praesent felis metus, sagittis eget libero in, luctus dictum dui. Nullam tincidunt risus quam, a varius libero tincidunt pulvinar.
            Aenean rutrum sollicitudin felis ut ullamcorper. Nunc lectus enim, porta nec orci et, venenatis sodales dui. Duis dictum rhoncus elementum.
            Maecenas nunc est, tempus eget sem vitae, malesuada eleifend lectus. Proin volutpat lacus mollis interdum eleifend.
            Proin eget velit et est bibendum sodales vel vitae augue. Praesent cursus dictum dolor volutpat ultrices. Sed tincidunt lacus velit.
            Aenean sit amet cursus felis.
          </p>
          <p>
            Phasellus blandit mauris nec aliquam placerat. Quisque dolor nunc, pharetra at diam non, laoreet sodales augue.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Praesent sollicitudin urna vel dolor vulputate facilisis. Nullam at tellus quis arcu gravida laoreet.
            In ut sem sodales, vestibulum nunc vel, malesuada nulla. Suspendisse pharetra nibh lorem, ut eleifend magna malesuada in.
            Cras hendrerit arcu a nisi pellentesque varius. Vestibulum elementum nisl nulla, id vestibulum sem sollicitudin a.
            Nunc sed augue at purus euismod commodo. Ut viverra magna sit amet quam placerat, at iaculis ante fringilla.
          </p>

          <div className='text-center'>
            {/* <img src={paloma} alt="Hienas" className="mx-auto d-block"  /> */}
            <LazyLoadImage src={paloma}
              placeholderSrc={placeholderPaloma}
              alt='Paloma'
              effect="opacity"
              style={{ width: "550px", height: "350px" }}
            />
          </div>
          <p>
            Integer ornare, erat sed luctus cursus, elit turpis finibus sapien, eget aliquam quam risus et risus.
            Suspendisse pretium nulla sed augue feugiat luctus. Phasellus porta sagittis mauris, vitae ullamcorper eros tristique a.
            Ut dapibus turpis a libero dignissim pellentesque. Fusce ultricies lectus ac mi imperdiet, sed tincidunt nibh luctus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales laoreet laoreet.
            Vestibulum dapibus, massa nec commodo maximus, erat justo laoreet quam, nec rutrum turpis eros congue risus.
          </p>
          <p>
            Sed at risus nunc. Curabitur laoreet arcu ut commodo blandit. Praesent pellentesque nisi pretium scelerisque porttitor.
            In vulputate leo sit amet nibh iaculis, vel aliquam neque suscipit. Pellentesque feugiat ex quis fermentum feugiat.
            Curabitur id dolor massa. Integer molestie sem nec feugiat laoreet. Nam pretium pellentesque mi, at consectetur ligula suscipit at.
            Maecenas luctus tristique nisi pretium elementum. Duis ut elit egestas ligula venenatis ornare eu eget mi.
          </p>

          <div className='text-center'>
            {/* <img src={lobo} alt="Hienas" className="mx-auto d-block"  /> */}
            <LazyLoadImage src={lobo}
              placeholderSrc={placeholderLobo}
              alt='Lobo'
              effect="opacity"
              style={{ width: "550px", height: "350px" }}
            />
          </div>
          <p>
            Mauris non ornare lorem. Morbi sed vehicula metus. Aliquam erat volutpat. Nullam sollicitudin orci eget nisi condimentum feugiat.
            Phasellus augue erat, vulputate ullamcorper ornare non, tristique non turpis. Vestibulum ex quam, commodo nec dui nec,
            tempor malesuada nisi. Fusce non fermentum turpis.
          </p>
          <p>
            Sed pellentesque aliquet libero a laoreet. Quisque id dapibus dui. Aliquam finibus metus elit, id varius tortor dictum sed.
            Cras id convallis massa, id bibendum lacus. Fusce sed suscipit nisi. Vivamus ipsum arcu, aliquet sed erat eu, bibendum ultricies mauris.
            Fusce at ipsum consequat, sagittis dui eget, gravida ipsum. Donec sed ultricies nisi. Nullam sed mi nulla.
            Aenean a dolor suscipit, tincidunt ligula in, iaculis erat. Aenean eu dui cursus, commodo elit maximus, rhoncus tortor.
          </p>


        </div>

      </div >


    )
  }
}


