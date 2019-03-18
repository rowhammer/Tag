@ECHO OFF

IF EXIST "C:\\ProgramData\\Hydrogen" (
echo Hydrogen folder found, continuing...
) ELSE (
echo No Hydrogen folder found, creating one...
mkdir C:\ProgramData\Hydrogen
)

IF EXIST "C:\\ProgramData\\Hydrogen\\Loader_Log.txt" (
echo Log file already exists, continuing...
) ELSE (
(echo) > C:\ProgramData\Hydrogen\Loader_Log.txt
echo Log file created.
)

IF EXIST "C:\\ProgramData\\Hydrogen\\EULA.txt" (
echo EULA file already exists, continuing...
) ELSE (
(echo) > C:\ProgramData\Hydrogen\EULA.txt
echo EULA file created.
)

echo(
echo All done!
echo(

pause