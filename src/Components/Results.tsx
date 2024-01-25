
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Collapse,
} from '@chakra-ui/react'; // Or any other table library

import { useState } from 'react';
interface ResultsProps {
  quantity: number;
  generalMetrics: Record<string, any>; // Assuming generalMetrics is an object
  groupedMetrics: Record<string, any>; // Assuming groupedMetrics is also an object
}

const Results = (props: ResultsProps) => {
  const { quantity, generalMetrics, groupedMetrics } = props;
  const [showGroupedMetrics, setShowGroupedMetrics] = useState(false);

  return (
    <div className='bg-white absolute -top-28 bottom-0 left-6 w-full  rounded-tl-xl z-10'>
      {quantity}

      {/* General Metrics Table */}
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Metric</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(generalMetrics).map(([key, value]) => (
            <Tr key={key}>
              <Td>{key}</Td>
              <Td>{value}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Expand Button */}
      <Button mt={2} onClick={() => setShowGroupedMetrics(!showGroupedMetrics)}>
        {showGroupedMetrics ? 'Hide Grouped Metrics' : 'Show Grouped Metrics'}
      </Button>

      {/* Collapsible Grouped Metrics Table */}
      <Collapse in={showGroupedMetrics}>
        <Table variant='simple' mt={4}>
          <Thead>
            <Tr>
              <Th>Group</Th>
              <Th>Quantity</Th>
              <Th>Avg. USD/m²</Th>
              <Th>Max. USD/m²</Th>
              <Th>Min. USD/m²</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(groupedMetrics).map(([group, metrics]) => (
              <Tr key={group}>
                <Td>{group}</Td>
                <Td>{metrics.quantity}</Td>
                <Td>{metrics.usdM2Avg}</Td>
                <Td>{metrics.usdM2Max}</Td>
                <Td>{metrics.usdM2Min}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Collapse>
    </div>
  );
};

export default Results;


