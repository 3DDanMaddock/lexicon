import config from "./config";

let visibleTiles = [];

const getIndex = (row, column) => {
  /// row - 1 because arrays start at 0
  return (row - 1) * config.columns + column;
};

const getIndexRange = (row, start, end) => {
  let indexRangeArr = [];

  for (var i = 0; start + i <= end; i++) {
    const columnIndex = start + i;

    indexRangeArr.push(getIndex(row, columnIndex));
  }

  return indexRangeArr;
};

visibleTiles = [
  ...getIndexRange(1, 53, 56),
  ...getIndexRange(1, 67, 69),
  getIndex(3, 62),
  ...getIndexRange(3, 71, 74),
  ...getIndexRange(4, 21, 23),
  ...getIndexRange(4, 27, 30),
  ...getIndexRange(4, 44, 45),
  ...getIndexRange(4, 61, 64),
  ...getIndexRange(5, 19, 31),
  ...getIndexRange(5, 44, 45),
  ...getIndexRange(5, 61, 66),
  ...getIndexRange(6, 18, 30),
  ...getIndexRange(6, 44, 46),
  ...getIndexRange(6, 58, 73),
  ...getIndexRange(7, 14, 14),
  ...getIndexRange(7, 18, 31),
  ...getIndexRange(7, 56, 87),
  ...getIndexRange(8, 4, 7),
  ...getIndexRange(8, 12, 16),
  ...getIndexRange(8, 18, 20),
  ...getIndexRange(8, 23, 30),
  ...getIndexRange(8, 56, 86),
  ...getIndexRange(9, 4, 8),
  ...getIndexRange(9, 12, 21),
  ...getIndexRange(9, 25, 31),
  ...getIndexRange(9, 46, 47),
  ...getIndexRange(9, 56, 84),
  getIndex(9, 86),
  ...getIndexRange(10, 3, 22),
  ...getIndexRange(10, 24, 30),
  ...getIndexRange(10, 43, 84),
  ...getIndexRange(11, 3, 19),
  ...getIndexRange(11, 21, 22),
  ...getIndexRange(11, 25, 30),
  ...getIndexRange(11, 44, 84),

  ...getIndexRange(12, 2, 18),
  ...getIndexRange(12, 20, 23),
  ...getIndexRange(12, 26, 29),
  ...getIndexRange(12, 31, 32),
  ...getIndexRange(12, 42, 83),
  ...getIndexRange(13, 2, 22),
  ...getIndexRange(13, 25, 28),
  ...getIndexRange(13, 31, 33),
  ...getIndexRange(13, 40, 40),
  ...getIndexRange(13, 43, 79),
  ...getIndexRange(13, 81, 82),

  ...getIndexRange(14, 2, 3),
  ...getIndexRange(14, 6, 15),
  ...getIndexRange(14, 19, 21),
  ...getIndexRange(14, 25, 27),
  ...getIndexRange(14, 32, 32),
  ...getIndexRange(14, 39, 39),
  ...getIndexRange(14, 42, 75),
  ...getIndexRange(14, 81, 82),

  getIndex(15, 4),
  ...getIndexRange(15, 7, 16),
  ...getIndexRange(15, 20, 22),
  ...getIndexRange(15, 26, 27),
  ...getIndexRange(15, 38, 40),
  ...getIndexRange(15, 43, 76),
  ...getIndexRange(15, 81, 82),

  ...getIndexRange(16, 6, 16),
  ...getIndexRange(16, 19, 21),
  ...getIndexRange(16, 38, 77),
  ...getIndexRange(16, 81, 82),

  ...getIndexRange(17, 7, 17),
  ...getIndexRange(17, 19, 23),
  ...getIndexRange(17, 40, 79),

  ...getIndexRange(18, 6, 23),
  ...getIndexRange(18, 40, 53),
  ...getIndexRange(18, 55, 79),

  ...getIndexRange(19, 6, 21),
  ...getIndexRange(19, 24, 24),
  ...getIndexRange(19, 40, 48),
  ...getIndexRange(19, 52, 53),
  ...getIndexRange(19, 56, 79),

  ...getIndexRange(20, 5, 21),
  ...getIndexRange(20, 24, 24),
  ...getIndexRange(20, 37, 40),
  ...getIndexRange(20, 44, 47),
  ...getIndexRange(20, 52, 53),
  ...getIndexRange(20, 56, 77),

  ...getIndexRange(21, 6, 20),
  ...getIndexRange(21, 22, 22),
  ...getIndexRange(21, 38, 40),
  ...getIndexRange(21, 47, 47),
  ...getIndexRange(21, 49, 54),
  ...getIndexRange(21, 56, 77),

  ...getIndexRange(22, 5, 18),
  ...getIndexRange(22, 38, 39),
  ...getIndexRange(22, 48, 54),
  ...getIndexRange(22, 56, 74),
  ...getIndexRange(22, 76, 77),
  ...getIndexRange(22, 80, 81),

  ...getIndexRange(23, 5, 17),

  ...getIndexRange(24, 5, 17),

  ...getIndexRange(25, 6, 16),

  ...getIndexRange(26, 5, 10),
  ...getIndexRange(26, 16, 16),

  ...getIndexRange(27, 6, 10),

  ...getIndexRange(28, 6, 9),

  ...getIndexRange(29, 8, 10),

  ...getIndexRange(30, 8, 13),

  ...getIndexRange(31, 11, 14),

  ...getIndexRange(32, 13, 13),
];

export default visibleTiles;
