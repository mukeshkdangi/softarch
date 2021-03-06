package edu.usc.softarch.S3upload;


import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import lombok.Data;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

/*
@Author Mukesh Dangi
 */

@Data
public class S3Manager {
    private static AmazonS3 s3Client;
    private static String KEY = "";
    private static String VALUE = "";

    public static File getFileFromS3(String fileKey) throws IOException {
        String bucketName = "softarch";

        try {
            // Get an object and print its contents.
            S3Object s3object = s3Client.getObject(new GetObjectRequest(bucketName, fileKey));
            return displayTextInputStream(s3object.getObjectContent(), fileKey);
        } catch (AmazonServiceException e) {
            e.printStackTrace();
        }
        return null;
    }

    private static File displayTextInputStream(InputStream input, String fileKey) throws IOException {
        File tmp = File.createTempFile(fileKey, "");
        Files.copy(input, tmp.toPath(), StandardCopyOption.REPLACE_EXISTING);
        return tmp;
    }

    public static void createS3Client() {
        Region region = Region.getRegion(Regions.US_EAST_1);
        BasicAWSCredentials awsCreds = new BasicAWSCredentials(KEY, VALUE);
        s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCreds)).withRegion(region.getName())
                .build();
    }
}
