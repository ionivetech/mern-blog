import React from 'react'
import './DetailBlog.scss'
import { DummyImage } from '../../assets'
import { Button, Gap } from '../../components'

const DetailBlog = () => {
    return (
        <div className="detail-blog">
            <div className="btn-detail-blog-wrapper">
                <Button text="Edit Blog" className="btn btn-primary" />
            </div>

            <Gap height={20} />

            <img className="img-thumbnail" src={DummyImage} alt="detail-blog" />

            <Gap height={20} />

            <div className="detail-blog">
                <p className="detail-blog-title">Title Blog</p>
                <p className="detail-blog-author">Author  - Date Post</p>
                <Gap height={20} />
                <p className="detail-blog-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sapien id enim finibus tempor. Etiam purus nunc, faucibus nec gravida sit amet, condimentum sit amet ex. Quisque facilisis purus leo, eget pretium augue bibendum sit amet. Aenean bibendum mi magna, luctus fermentum nibh fringilla nec. Sed vehicula orci lectus. Pellentesque pellentesque nunc neque, sed aliquet odio posuere vitae. Suspendisse volutpat magna et sem fringilla, nec efficitur felis porttitor. Vestibulum cursus augue at lorem vulputate, vitae auctor nibh tincidunt. Quisque vel orci sit amet dui vulputate aliquam in quis est. Nam mollis, neque vel accumsan fringilla, quam dui egestas tellus, a varius lectus eros in lectus.
                    <br/><br/>
                    Maecenas aliquet neque quis nibh hendrerit posuere. Fusce vitae vestibulum erat. Sed sagittis, urna eget molestie lacinia, tortor diam lobortis ipsum, eu mattis justo leo vitae felis. Fusce vestibulum libero sed odio tincidunt, eu lacinia quam volutpat. Quisque in metus in neque tempor condimentum et ac nisi. Donec vitae nibh tempor, dictum nunc non, blandit augue. In hendrerit justo tincidunt odio semper pretium. Sed vel ex vitae augue faucibus ullamcorper vel ac justo. Donec laoreet sem urna, at congue libero facilisis sed. Aenean nec massa blandit, viverra ipsum ut, volutpat libero. Proin pharetra, mi non iaculis vestibulum, lectus magna rhoncus nunc, vel pretium ipsum diam eu felis. Ut mauris lorem, finibus quis nulla gravida, euismod fringilla nibh. Nulla consectetur erat vitae purus suscipit rutrum. Quisque nec vestibulum urna. Donec cursus metus et fringilla sodales.
                </p>
            </div>
        </div>
    )
}

export default DetailBlog
