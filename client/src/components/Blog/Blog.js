import React from 'react'
import '../Blog/Blog.css'
export default function Blog() {
  return (
    <div>


        <div>
            <div className='row'>
            <div className="col-lg-custom-blog Card ">
                <h1  style={{ fontWeight: '300' }}>70%</h1>
                <p>confess to procrastinating on assignments</p>
            </div>
            <div className="col-lg-custom-blog Card ">
                <h1  style={{ fontWeight: '300' }}>80%</h1>
                <p>Learning and Development professionals, emphasize the significance of collaborative learning in bolstering organizational effectiveness"</p>
            </div>
            <div className="col-lg-custom-blog Card ">
                <h1  style={{ fontWeight: '300' }}>87%</h1>
                <p>Genz adults face stress in educational settings mostly due to isolation</p>
            </div>
            </div>
        </div>
              <h5 className=' heading'>From the Blog</h5>
              <p class="mt-2 text-lg leading-8 heading">Learn how to grow your business with our expert advice.</p>
              <hr class="line"></hr>
        <div className="row">
            <div className="col-lg-custom-blog Card ">
                <h5 className='font-weight-bold'>Amanda's Anxiety at Networking Events</h5>
                <p>"Networking events used to terrify me. Walking into a room full of strangers felt like a nightmare! But then, my friend Sarah offered to come with me. Having her there made all the difference. Suddenly, I didn't feel so alone. It's funny how a familiar face can turn a daunting situation into a breeze."</p>
            </div>
            <div className="col-lg-custom-blog Card">
                <h5 className='font-weight-bold'>Lena's Study Buddy Insight</h5>
                <p>"Studying alone? Procrastination central. But with Mia as my study buddy, it's a whole different story. Her presence keeps me focused, accountable, and on track. Funny how having a friend by your side can turn procrastination into productivity in no time."



</p>
            </div>
            <div className="col-lg-custom-blog Card">
                <h5 className='font-weight-bold'>Jake's Late-Night Tuition Dilemma</h5>
                <p>Late-night tuitions? No way I was going solo. But then, my buddy Sam suggested we go together. Having him by my side made the whole thing less scary. We'd crack jokes, grab snacks, and study together. With Sam around, it felt more like an adventure than a chore. Funny how a friend can change your whole perspective, right?</p>
            </div>
            {/* <div className="col-lg-3 Card">
                <h5 className='font-weight-bold'>Make learning an exciting journey</h5>
                <p>Our platform connects you with like-minded individuals eager to explore educational venues together, whether it's a cozy book café, captivating museum, or insightful science center. Together, challenges become manageable, work becomes lighter and the learning journey transforms into a fulfilling adventure.</p>
            </div> */}
           
        </div>
    </div>
  )
}
