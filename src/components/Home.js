import React, { Component } from 'react';
import conejoPolar from "./../assets/images/branch-snow.jpg"
import meadowPolar from "./../assets/images/meadow-prairie.jpg"
import pinguinoPolar from "./../assets/images/nature-bird.jpg"
import osoPolar from "./../assets/images/sea-snow.jpg"
import ciervoPolar from "./../assets/images/wildlife-deer.jpg"


export default class Home extends Component {
    render() {
        return (
            <div className='px-5 mx-5'>
                <h1 className='text-center'>Home</h1>

                <div>
                    <div id="lipsum" >
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
                        <img src={conejoPolar} alt='Conejo' className='mx-auto d-block'/>
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
                        <img src={meadowPolar} alt='Meadow' className='mx-auto d-block'/>
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
                        <img src={pinguinoPolar} alt='Pingüino' className='mx-auto d-block'/>
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
                        <img src={osoPolar} alt='Oso' className='mx-auto d-block'/>
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
                        <img src={ciervoPolar} alt='Ciervo' className='mx-auto d-block'/>
                        <p>
                            Vivamus id viverra ante. Nam laoreet eros varius hendrerit sodales. Ut tristique auctor leo id posuere. Maecenas justo nisi, 
                            elementum eu gravida non, blandit a libero. Fusce sollicitudin in magna vitae eleifend. Proin sapien mi, posuere nec pharetra id, 
                            tristique quis mi. Ut mattis auctor porttitor. Donec et ante pellentesque nunc dapibus facilisis.
                        </p>
                        <p>
                            Etiam ultrices tincidunt purus faucibus eleifend. Etiam ultricies viverra magna, a tempor elit posuere sagittis. 
                            Cras et dolor non sem blandit pretium. Maecenas vestibulum sodales dui sed efficitur. Ut diam enim, lacinia nec bibendum eget, 
                            imperdiet ac ipsum. Donec interdum quis est a fringilla. Sed ultrices euismod lorem, nec tincidunt tortor. Nulla facilisi. 
                            Duis id viverra lectus. Mauris volutpat eu nisl ut mattis.
                        </p>

                        <p>
                            Sed a dui a sapien ultrices blandit. Maecenas bibendum finibus nulla, et placerat lorem cursus non. 
                            Vivamus consequat enim ut ipsum cursus elementum. Etiam in egestas ex. Nulla consequat suscipit lobortis. 
                            Fusce fringilla dictum accumsan. Aliquam sed porta massa. Pellentesque pellentesque libero nisl. 
                            Phasellus a justo et neque tincidunt egestas quis eget eros. In scelerisque sagittis urna vel luctus. 
                            Ut venenatis commodo nisl, a varius erat dapibus in. Mauris tempor et nibh in porttitor. Nulla mollis lorem id nibh vehicula varius.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
