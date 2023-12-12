import { DynamoDBClient, GetItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";

const accessKey = "AKIAXGWUNOQOURL66XFI"
const secretAccessKey = "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"
const tableName = "PC-Part-Picker"

const dbClient = new DynamoDBClient({
  region: 'us-west-2',
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey
  }
});

const getItem = async () => {
  const params = {
    TableName: tableName,
    Key: {
      PartID: { N: '7' },
      PartType:{S:"Motherboard"}
    }
  };

  try {
    const data = await dbClient.send(new GetItemCommand(params));
    console.log(data.Item);
  } catch (err) {
    console.log(err);
  }
};

const scanTable = async () => {
  const params = {
    TableName: tableName,
    FilterExpression: 'PartType = :partType',
    ExpressionAttributeValues: {
      ':partType': { S: 'Motherboard' }
    }
  };

  try {
    const data = await dbClient.send(new ScanCommand(params));
    console.log(data.Items);
  } catch (err) {
    console.log(err);
  }
};

// scanTable();

getItem();
