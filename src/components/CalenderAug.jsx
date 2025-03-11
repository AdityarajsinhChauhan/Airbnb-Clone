import React from 'react'

const CalenderAug = ({message}) => {
  return (
    <div className='relative w-[19rem]' onClick={message}>
        <h1 className="flex items-center justify-center w-[19rem]">
            <img src="/ui-images/right-arrow.svg" className="absolute right-3 top-3 w-5 h-5 hover:bg-gray-100 rounded-full cursor-pointer p-1" alt="" />
            August 2025</h1>
      <table className="text-xs w-[19rem]">
        <thead>
          <tr>
            <th><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-default">Sun</div></th>
            <th><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-default">Mon</div></th>
            <th><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-default">Tue</div></th>
            <th><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-default">Wed</div></th>
            <th><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-default">Thu</div></th>
            <th><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-default">Fri</div></th>
            <th><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-default">Sat</div></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">1</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">2</div></td>
          </tr>
          <tr>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">3</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">4</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">5</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">6</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">7</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">8</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">9</div></td>
          </tr>
          <tr>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">10</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">11</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">12</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">13</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">14</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">15</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">16</div></td>
          </tr>
          <tr>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">17</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">18</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">19</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">20</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">21</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">22</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">23</div></td>
          </tr>
          <tr>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">24</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">25</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">26</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">27</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">28</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">29</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">30</div></td>
          </tr>

          <tr>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black">31</div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
            <td><div className="flex justify-center items-center rounded-full w-[2.71rem] h-[2.71rem] border border-transparent cursor-pointer hover:border-black"></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CalenderAug

