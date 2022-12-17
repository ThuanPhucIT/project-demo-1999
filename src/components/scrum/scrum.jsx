import React from 'react'

const Scrum = () => {
  return (
    <div>
      <div className='mb-10 flex flex-col justify-between items-center md:flex-row'>
        <div className="w-full hidden border-t-4 border-blue-400 md:block"></div>
        <p className=" text-center text-3xl font-rubik text-blue-600 md:text-6xl md:text-end md:ml-5">SCRUM</p>
      </div>
      <p className='text-center text-2xl font-bold font-zen'>Báo cáo tìm hiểu qui trình SCRUM</p>


    <div className='mx-2 leading-loose font-quicksand'>
      <div >
        <p className='font-bold text-2xl'>1. Scrum là gì?</p>
        <p>Scrum là một phương pháp Agile dùng cho phát triển sản phẩm, đặc biệt là phát triển phần mềm.
            Scrum là một khung quản lý dự án được áp dụng rất rộng rãi,
            từ những dự án đơn giản với một nhóm phát triển nhỏ cho đến những dự án có yêu cầu rất phức tạp với hàng trăm người tham gia,
             và kể cả những dự án đòi hỏi khung thời gian cố định.
        </p>
        <p>
        Trong Scrum, công việc được thực hiện bởi Nhóm Scrum thông qua từng phân đoạn lặp liên tiếp nhau được gọi là Sprint.
        Để hiểu được Scrum thì cần hiểu nguyên lý của Scrum, các Vai trò, Tạo tác, Sự kiện và sự vận hành của một vòng đời Scrum.
        </p>
       </div>



       <div>
        <p className='font-bold text-2xl'>2. Ba trụ cột của Scrum</p>
        <p><span className='font-bold'>Minh bạch (transparency):</span> Đầu tiên, thông tin liên quan tới quá trình phát triển phải minh bạch và thông suốt.
           Các thông tin đó có thể là: tầm nhìn (vision) về sản phẩm, yêu cầu khách hàng, tiến độ công việc, các khúc mắc rào cản,
           …Từ đó mọi người ở các vai trò khác nhau có đủ thông tin cần thiết để tiến hành các quyết định có giá trị nhằm nâng cao hiệu quả công việc.
            Các công cụ và cuộc họp trong Scrum luôn đảm bảo thông tin được minh bạch cho các bên.
        </p>
        <p>
        <span className='font-bold'>Thanh tra (inspection):</span> Công tác thanh tra liên tục các hoạt động trong Scrum đảm bảo cho việc phát lộ các vấn đề
         cũng như giải pháp để thông tin đa dạng và hữu ích đến được với các bên tham gia quá trình phát triển.
         Truy xét kỹ càng và liên tục là cơ chế khởi đầu cho việc thích nghi và các cải tiến liên tục trong Scrum.
        </p>
        <p><span className='font-bold'>Thích nghi (adaptation):</span> Dựa trên các thông tin minh bạch hóa từ các quá trình thanh gia và làm việc,
             Scrum có thể phản hồi các thay đổi một cách tích cực, nhờ đó mang lại thành công cho sản phẩm.
              Các nỗ lực minh bạch và thanh tra đều hướng tới hành động thích ứng nhanh chóng và hiệu quả.
        </p>
       </div>


       <div>
        <p className='font-bold text-2xl'>3. Hai đặc điểm của Nhóm Scrum</p>
        <p><span className='font-bold'>Tự quản (self-managing):</span> Đây là một thuật ngữ mới thay thế cho thuật ngữ cũ (self-organizing)
            được cập nhật trong tài liệu Hướng dẫn Scrum mới nhất năm 2020.
            Điều này có nghĩa là nhóm sẽ cùng ra quyết định sẽ làm gì,
            ai sẽ làm và làm như thế nào mà không bị sự chỉ đạo bởi ai đó bên ngoài nhóm.
            Các Nhóm Scrum được trao quyền để quản lý công việc của họ nhằm hướng tới một mục tiêu chung là
            giúp tổ chức giải quyết các vấn đề phức tạp nhanh nhẹn hơn và tạo ra kết quả chất lượng hơn.
        </p>
        <p><span className='font-bold'>Liên chức năng (cross-functional):</span> Một nhóm liên chức năng bao gồm nhiều cá nhân với các chuyên môn khác nhau
            đủ năng lực được kết hợp lại cùng làm việc hướng tới một mục tiêu chung.
            Trong dự án, các cá nhân có thể đến từ nhiều phòng ban chức năng khác nhau,
            cũng có thể xuất phát từ bên ngoài.Nhưng khi đã thành một nhóm (team), 
            thì các cá nhân làm việc tập trung cho đội như là một đơn vị (unit) để hoàn tất mục tiêu chung. 
            Bên trong nhóm liên chức năng không có các nhóm nhỏ khác.
        </p>
       </div>



       <div>
        <p className='font-bold text-2xl'>4. Ba vai trò trong nhóm Scrum</p>
        <p>Trong Scrum, có ba vai trò: Product Owner, Nhà Phát triển, và Scrum Master. Tất cả hợp thành Nhóm Scrum.</p>
        <p><span className='font-bold'>Product Owner:</span> Vai trò này chịu trách nhiệm tối ưu hóa lợi nhuận trên đầu tư 
            (ROI – Return On Investment) thông qua việc quyết định các tính năng của sản phẩm, đánh giá và sắp xếp độ ưu tiên của từng hạng mục,
            những hạng mục có độ ưu tiên cao thì sẽ được đưa vào phát triển trước, 
            những hạng mục có độ ưu tiên thấp hơn thì sẽ được phát triển sau. 
            Product Owner thường khác với một Giám đốc Sản phẩm truyền thống ở chỗ đó là Product Owner tham gia tích cực vào quá trình phát triển sản phẩm, 
            thay vì chỉ quản lý và ủy quyền cho những người khác thực hiện các quyết định liên quan đến sản phẩm.
        </p>
        <p>
          <span className='font-bold'>Scrum Master:</span> là một vai trò then chốt giúp nhóm Scrum làm việc hiệu quả bằng cách tuân thủ nguyên lý,
          các kỹ thuật và quy tắc của Scrum. Scrum Master không phải là người quản lý của Nhóm mà là một lãnh đạo theo phong cách phục vụ (Servant Leader).
          Scrum Master làm tất cả những gì trong thẩm quyền phục vụ Product Owner, Nhóm Phát triển, và Tổ chức đi đến thành công.
        </p>
        <p><span className='font-bold'>Nhà phát triển:</span> là đội ngũ trực tiếp làm ra sản phẩm,
          họ bao gồm các chuyên gia có nhiệm vụ chuyển giao phần tăng trưởng ở cuối mỗi Sprint.
          Các Nhà phát triển không có sự phân chia các chức danh chuyên môn đặc thù cho từng thành viên, 
          ví dụ như: kiểm thử viên, lập trình viên, chuyên gia thiết kế, chuyên gia cơ sở dữ liệu,… mà tất cả đều được gọi chung là Nhà phát triển. Việc này giúp nâng cao tính sở hữu tập thể, 
          trách nhiệm tập thể và bình đẳng giữa các thành viên.
        </p>
       </div>



       <div>
        <p className='font-bold text-2xl'>5. Năm sự kiện trong Scrum</p>
        <p><span className='font-bold'>Sprint:</span> Có thể nói Sprint là trái tim của Scrum và là khoảng thời gian cố định mà ở
          đó các Nhà Phát triển thực hiện công việc phát triển sản phẩm.
        </p>
        <p>Sprint được đóng khung thời gian không dài hơn 1 tháng và thường thì không ngắn hơn một tuần. 
            Các Sprint có độ dài như nhau và diễn ra liên tiếp nhau mà không bị gián đoạn. 
            Sprint kết thúc khi thời gian đóng khung kết thúc, bất kể các công việc trong đó đã được hoàn thành hết hay chưa.
        </p>
        <p>
        <span className='font-bold'>Lập kế hoạch Sprint (Sprint Planning):</span> Là sự kiện diễn ra đầu Sprint để lên kế hoạch làm việc cho toàn bộ Sprint.
         Sự kiện này được chia làm 3 phần với 3 mục đích rõ ràng:
        </p>
        <p><span className='font-bold'>Phần 1:</span> nhằm trả lời câu hỏi: “Tại sao chúng ta làm những thứ này?” –
         điều này được trình bày bởi Product Owner và sau đó cả nhóm sẽ thống nhất để xác định rõ Mục tiêu của Sprint (Sprint Goal)
        </p>
        <p>
        <span className='font-bold'>Phần 2:</span> trả lời cho câu hỏi : “Chúng ta sẽ hoàn thành những gì?“.
        Thông qua việc trao đổi với Product Owner, các Nhà phát triển sẽ lựa chọn những hạng mục từ Product Backlog
        để phát triển trong Sprint hiện tại.
        </p>
        <p>
        <span className='font-bold'>Phần 3:</span> sẽ trả lời câu hỏi : “Chúng ta sẽ làm như thế nào?“.
         Đối với mỗi hạng mục được lựa chọn, các Nhà phát triển sẽ lên kế hoạch các công việc cụ thể để hoàn thành được mục tiêu Sprint (Sprint Goal).
        </p>
        <p>
        <span className='font-bold'>Kết quả của buổi Lập kế hoạch Sprint là:</span> Mục tiêu Sprint và Sprint Backlog.Scrum Hằng ngày (Daily Scrum):
        Là buổi gặp mặt ngắn 15 phút hằng ngày của tất cả các thành viên Nhóm Phát triển để thanh tra và tái lập kế hoạch cho nhóm.
        </p>
        <p>
        <span className='font-bold'>Sơ kết Sprint (Sprint review):</span> Là sự kiện diễn ra ở cuối Sprint nhằm thanh tra và thích nghi sản phẩm đang được xây dựng.
        Toàn bộ Nhóm Scrum (bao gồm Product Owner, Scrum Master và Nhóm Phát triển) tham dự sự kiện này.
        Product Owner có thể mời thêm những người khác cùng tham gia.
        </p>
        <p>
        Sự kiện này bao gồm 2 hoạt động chính đó là dùng thử sản phẩm và thảo luận về tình hình của sản phẩm,
        hướng đi tiếp theo và những điều chỉnh đối với sản phẩm nếu cần thiế. Product Backlog và Kế hoạch Phát hành có thể được điều
        chỉnh sau sự kiện này.
        </p>
        <p>
        <span className='font-bold'>Cải tiến Sprint (Sprint Retrospective):</span> Diễn ra sau sự kiện Sơ kết Sprint nhằm thanh tra và thích nghi quy trình làm việc.
        Nói ngắn gọn, sự kiện này là để cải tiến cách làm việc.
        Nhóm Phát triển và Scrum Master bắt buộc tham gia sự kiện này. 
        Product Owner có thể tham gia hoặc không. Nhóm Phát triển có thể mời thêm những người khác tham dự. 
        Kết quả của buổi làm việc này là một danh sách các thay đổi về cách làm việc được đưa vào áp dụng ngay trong Sprint tiếp theo.
        </p>
       </div>



       <div>
        <p className='font-bold text-2xl'>6. Các tạo tác trong Scrum – Scrum Artifact</p>
        <p><span className='font-bold'>Product Backlog:</span> là nơi lưu trữ danh sách các tính năng mong muốn của sản phẩm và liên tục được cập nhật trong suốt vòng đời của sản phẩm.
        Mỗi Product Backlog sẽ được gắn với mục tiêu (Product Goal) mô tả đích đến của sản phẩm mà mỗi hạng mục trong Product Backlog phải hỗ trợ mục tiêu này. 
        Product Owner là người chịu trách nhiệm quản lý và bảo trì Product Backlog. 
        Việc này bao gồm xác định nội dung (các hạng mục cần phát triển), đánh giá độ ưu tiên và sắp xếp các hạng mục, 
        làm mịn các hạng mục, làm rõ và giải thích tất cả mọi thắc mắc liên quan đến sản phẩm.
        </p>
        <p>
        <span className='font-bold'>Sprint Backlog:</span> Sprint Backlog là bảng công việc được các Nhà Phát triển sử dụng để quản lý quá trình phát triển trong một Sprint và được cập nhật trong suốt Sprint. 
        Sprint Backlog chứa danh sách các hạng mục và các công việc cần làm tương ứng với từng hạng mục để hoàn thành mục tiêu của Sprint đó
        </p>
        <p><span className='font-bold'>Incremental (Phần tăng trưởng):</span> là phần sản phẩm các Nhà Phát triển tạo ra cuối mỗi Sprint. 
            Đây là một khái niệm quan trọng trong Scrum tạo ra sự khác biệt lớn về mặt sản phẩm so với các phương pháp truyền thống. 
            Scrum không chỉ đơn giản tách quá trình phát triển thành các Sprint nhỏ liên tiếp nhau, 
            mà cuối mỗi Sprint đòi hỏi nhóm phải chuyển giao một phần tính năng “hoàn chỉnh” của sản phẩm. 
            Hoàn chỉnh ở đây được hiểu theo nghĩa được Product Owner chấp nhận dựa theo Định nghĩa Hoàn thành đã được thống nhất trước đó.
            Có thể nói, việc chuyển giao được một Phần tăng trưởng ở cuối mỗi Sprint là nhiệm vụ cốt lõi và không hề dễ dàng đối với các Nhà Phát triển.
        </p>
       </div>




       <div>
        <p className='font-bold text-2xl'>7. Các giá trị của Scrum</p>
        <p><span className='font-bold'>Tập trung:</span> Mọi người tập trung vào công việc trong Sprint và Mục tiêu Sprint của Nhóm. 
            Khi Nhóm Phát triển đã cam kết với những việc trong Sprint, họ cần phải tập trung để hoàn thành những gì mà mình đã cam kết.
        </p>
        <p>
        <span className='font-bold'>Dũng cảm:</span> Để một người dám nói ra vấn đề của mình và chấp nhận rất nhiều loại rủi ro khi thay đổi, cam kết, họ cần là người dũng cảm.
        Về cơ bản, những giá trị khác không thể có nếu bạn không có sự dũng cảm.
        </p>
        <p>
        <span className='font-bold'>Cam kết:</span> Ngoài ra, chúng ta liên tục cải tiến tức là thay đổi để trở thành một cá nhân tốt hơn, nhóm tốt hơn và tổ chức tốt hơn.
        Chúng ta luôn phải thay đổi để giữ vững lợi thế cạnh tranh và phục vụ khách hàng. 
        Thực hiện thay đổi bao giờ cũng rất khó khăn, do đó chỉ với sự cam kết của chúng ta mới có thể làm được.
        </p>
        <p>
        <span className='font-bold'>Cởi mở:</span> Mọi thứ cần phải rõ ràng, minh bạch để mọi người có thể làm việc hiệu quả.Công việc phát triển sản phẩm ngày nay rất phức tạp,
        một người không thể nhìn và hiểu được hết tất cả mọivấn đề. 
        Do đó, nếu mọi người không cởi mở với nhau, thông tin bị che giấu rất nhiều và hiệu quả công việc khó có thể nâng cao.
        </p>
        <p>
        <span className='font-bold'>Tôn trọng:</span> Khi thiếu tôn trọng, mọi người khó thành thật trong chia sẻ. 
        Ví dụ, khi một người không biết một điều gì đó và đi hỏi lại người khác. 
        Người trả lời thay vì mong muốn giúp đỡ để người hỏi trở nên tốt hơn, độc lập hơn lại phàn nàn, đánh giá người hỏi thì lần sau người hỏi sẽ khó mà cởi mở và nói sự thật được. 
        Không có tôn trọng, khó có sự cởi mở. Những công ty có văn hóa đổ lỗi khó có sự cởi mở.
        </p>
       </div>
    </div>
  </div>
  )
}

export default Scrum