<template>
  <div class="user-activity">
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg'+avatarPrefix">
        <span class="username text-muted">AI Lab</span>
        <span class="description">数据资产建立服务</span>
      </div>
      <p>
        数据资产建立服务通过数据清理服务和知识图谱建模服务加速企业数据资产增值，赋能企业发展。
        数据清理服务通过数据质量评估、自动数据提取技术、智能数据标注等快速形成有意义的结构化数据。
        知识图谱建模服务通过实体解析与本体建立和知识图谱生成与数据导出完成从数据到知识的转化。
      </p>
      <ul class="list-inline">
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-share" />
            Share
          </span>
        </li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" />
            Like
          </span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg'+avatarPrefix">
        <span class="username text-muted">AI Lab</span>
        <span class="description">人工智能与数据分析应用</span>
      </div>
      <p>
        基于西门子在工业数据分析和人工智能领域三十多年的研发积累和案例，为中国用户提供了预测、优化、自然语言处理等领域的应用，目前已经广泛应用于中国各个工业领域。
        预测与预测性维护：包括时间序列预测、异常检测、预测性维护、剩余可用寿命预测、入侵检测等。
        优化：包括生产质量优化与良率提升、工业设备和楼宇节能、生产计划与排程优化等。
        自然语言处理与知识管理：包括运维知识管理、系统设备的故障自动诊断等。
      </p>
      <ul class="list-inline">
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-share" />
            Share
          </span>
        </li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" />
            Like
          </span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg'+avatarPrefix">
        <span class="username">AI Lab</span>
        <span class="description">展示照片</span>
      </div>
      <div class="user-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in carouselImages" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>
      <ul class="list-inline">
        <li><span class="link-black text-sm"><i class="el-icon-share" /> Share</span></li>
        <li>
          <span class="link-black text-sm">
            <svg-icon icon-class="like" /> Like</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import pic1 from '@/assets/ai-lab/1.jpg'
import pic2 from '@/assets/ai-lab/2.jpg'
import pic3 from '@/assets/ai-lab/3.png'
import pic4 from '@/assets/ai-lab/4.png'

const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/w/100/h/600'

export default {
  data() {
    return {
      carouselImages: [
        pic1,
        pic2,
        pic3,
        pic4
      ],
      avatarPrefix,
      carouselPrefix
    }
  }
}
</script>

<style lang="scss" scoped>
.user-activity {
  .user-block {

    .username,
    .description {
      display: block;
      margin-left: 50px;
      padding: 2px 0;
    }

    .username{
      font-size: 16px;
      color: #000;
    }

    :after {
      clear: both;
    }

    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }

    span {
      font-weight: 500;
      font-size: 12px;
    }
  }

  .post {
    font-size: 14px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: #666;

    .image {
      width: 100%;
      height: 100%;

    }

    .user-images {
      padding-top: 20px;
    }
  }

  .list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;

    li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
    }

    .link-black {

      &:hover,
      &:focus {
        color: #999;
      }
    }
  }

}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
</style>
