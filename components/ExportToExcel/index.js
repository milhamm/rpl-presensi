/* eslint-disable react/display-name */
import DetailPage from '@components/DetailPage';
import { DATE_FORMAT_EXCEL, DATE_FORMAT } from '@constant/index';
import capitalize from '@lib/capitalize';
import { formatLongDate } from '@lib/formatDate';
import dayjs from 'dayjs';
import React, { useImperativeHandle, useRef } from 'react';
import ReactExport from 'react-data-export';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportToExcel = React.forwardRef(({ information }, ref) => {
  const btnRef = useRef();

  const renderDataInformation = (data) => {
    return data.map((val) => [{ value: val.name }, { value: val.value }]);
  };

  const renderPresensiInformation = (data) => {
    return data.map((val) => [
      { value: val.nama },
      { value: capitalize(val.status) },
    ]);
  };

  const dataset = [
    {
      columns: [
        { title: 'RPL-GDC Study Group Presensi', width: { wpx: 80 } }, //pixels width
        // { title: '', width: { wpx: 80 } }, //char width
      ],
      data: renderDataInformation([
        { name: 'Divisi', value: information.divisi },
        { name: 'Penutor', value: information.penutor },
        { name: 'Materi', value: information.judul },
        {
          name: 'Tanggal',
          value: formatLongDate(information.tanggal, DATE_FORMAT),
        },
        { name: 'Tempat', value: information.tempat },
        { name: 'Deskripsi', value: information.deskripsi },
        {
          name: 'exported_on',
          value: formatLongDate(dayjs().toISOString(), DATE_FORMAT),
        },
      ]),
    },
    {
      xSteps: 6,
      ySteps: -8,
      columns: [
        { title: 'Nama', width: { wpx: 80 } }, //pixels width
        { title: 'Status', width: { wpx: 80 } }, //char width
      ],
      data: renderPresensiInformation(information.presensis),
    },
  ];

  // console.log(dataset);

  useImperativeHandle(ref, () => {
    const handleSubmit = () => {
      btnRef.current.click();
    };

    return {
      handleSubmit,
    };
  });

  return (
    <ExcelFile
      filename={`RPL-GDC_${information.divisi}_${formatLongDate(
        information.tanggal,
        DATE_FORMAT_EXCEL
      )}_${dayjs().unix()}`}
      element={
        <button ref={btnRef} style={{ display: 'none' }}>
          Download Data With Styles
        </button>
      }
    >
      <ExcelSheet dataSet={dataset} name='RPL-GDC Study Group Presensi' />
    </ExcelFile>
  );
});

export default ExportToExcel;
