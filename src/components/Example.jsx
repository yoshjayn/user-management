import React from 'react';

const Example = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

return (
    <div className="flex items-center justify-center mt-4 space-x-2">
        <button
            className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Previous
        </button>
        <div>
            {Array.from({ length: totalPages }, (_, index) => {
                if (
                    // index < 3 ||
                    (index >= currentPage - 2 && index <= currentPage + 2) 
                    // || index >= totalPages - 3
                ) {
                    return (
                        <button
                            key={index + 1}
                            className={`px-4 py-2 border rounded-md ${
                                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    );
                } 
                // else if (index === 3) {
                //     return <span key={index}>...</span>;
                // }
            })}
        </div>
        <button
            className="px-4 py-2 border rounded-md bg-gray-200 hover:bg-gray-300"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Next
        </button>
    </div>
);
};

export default Example;
