import React from 'react'
const Progress = () => {
  return (
    <div>
      <div className='mb-10 flex flex-col justify-between items-center md:flex-row'>
        <p className="w-2/3 text-center text-3xl font-rubik text-blue-600 md:text-6xl md:text-start">QUÁ TRÌNH</p>
        <div className="w-full hidden border-t-4 border-blue-400 md:block"></div>
      </div>


      <div className='grid grid-cols-3 gap-1 mb-5 pb-2 text-xl font-zen border-b-2 border-b-black dark:border-b-white'>
        <div className=' text-center font-bold '>Thời gian</div>
        <div className='text-center font-bold'>Công Việc</div>
        <div className='text-center font-bold'>Kết quả cần đạt</div>
      </div>


      <div className='grid grid-cols-3 gap-1 m-3 border-b-2 border-b-black dark:border-b-white'>
        <div className='col-span-1 text-center '>1/12/2022-5/12/2022</div>
        <div className=''>
          <div>-Chia nhóm</div>
          <div>-Họp nhóm lần 1</div>
          <div>-Lên kế hoạch cho dự án</div>
        </div>
        <div className=''>
          <div>-Làm quen được các thành viên, biết điểm mạnh điểm yếu</div>
          <div>-Tạo được project plan</div>
          <div>-Biết được các bước tiến hành dự án</div>
        </div>
      </div>


      <div className='grid grid-cols-3 gap-1 m-3 border-b-2 border-b-black dark:border-b-white'>
        <div className='col-span-1 text-center '>6/12/2022-13/12/2022</div>
        <div className=''>
          <div>-Họp nhóm lần 2</div>
          <div>-Tạo được logo,tìm được tên nhóm</div>
          <div>-Tìm hiểu quy trình Scrum</div>
          <div>-Phân chia nhiệm vụ</div>
          <div>-Tiến hành sprint 1</div>
          <div>-Tạo được website</div>
        </div>
        <div className=''>
          <div>-Hiểu được quy trình Scrum</div>
          <div>-Phân công nhiệm vụ phù hợp</div>
          <div>-Sau họp nhóm biết được quy trình scrum cần làm gì , dự án tiến hành theo qui trình scrum</div>
          <div>-Báo cáo được quy trình Scrum</div>
          <div>-Biết được công cụ , phần mềm thực hiện dự án</div>
          <div>-Hoàn thành sprint 1</div>
          <div>- Có biên bản họp nhóm lần 2</div>
          <div>-Rút kinh nghiệm sau lần họp 2</div>
          <div>- Website khung</div>
        </div>
      </div>


      <div className='grid grid-cols-3 gap-1 m-3 border-b-2 border-b-black dark:border-b-white'>
        <div className='col-span-1 text-center '>14/12/2022-20/12/2022</div>
        <div className=''>
          <div>-Họp nhóm lần 3</div>
          <div>-Thực hiện dự án theo quy trình Scrum</div>
          <div>-Tiến hành sprint 2</div>
          <div>-Hoàn tất sản phẩm và chuẩn bị báo cáo</div>
        </div>
        <div className=''>
          <div>-Hoàn thành sprint 2, đồ án hoàn thành xong phần cơ bản</div>
          <div>-Tổng hợp các báo cáo và sửa chữa biên bản để đưa lên website</div>
          <div>-Hoàn thành website và đưa thông tin lên</div>
        </div>
      </div>

      
      <div className='grid grid-cols-3 gap-1 m-3 pb-2 border-b-2 border-b-black dark:border-b-white'>
        <div className='col-span-1 text-center '>21/12/2022</div>
        <div className=''>
          <div>-Báo cáo đồ án 1</div>
        </div>
      </div>
    </div>
  )
}

export default Progress